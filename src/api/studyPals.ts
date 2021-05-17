import axios from 'axios';
import {
  AggregateEvent,
  Note,
  PostContentOptions,
  Reaction,
  UserContent,
} from 'store/lecture/state';

const emojis: any = {
  grinning_face_with_big_eyes: '😃',
  grinning_face_with_sweat: '😅',
  face_with_tears_of_joy: '😂',
  squinting_face_with_tongue: '😝',
  thinking_face: '🤔',
  sleepy_face: '😴',
  frowning_face: '☹️',
  fearful_face: '😨',
  angry_face: '😠',
};

export const fetchUserContents = async (
  studentId?: string,
  lectureId?: string
): Promise<UserContent[]> => {
  const res = await axios.get(
    `https://study-pal-python-functions.azurewebsites.net/api/raw_event?lecture_id=${lectureId}&user_id=${studentId}`
  );

  const contents: UserContent[] = [];
  res.data.forEach((item: any) => {
    contents.push({
      type: item.event_type,
      content: item.content,
      timestamp: item.start_timestamp,
    });
  });

  return contents;
};

export const postNoteOrComment = async (options: PostContentOptions) => {
  if (!options.lectureId) options.lectureId = '911';
  if (!options.studentId) options.studentId = '12345';

  const res = await axios.post(
    `https://study-pal-api-gateway.azure-api.net/api/raw_event`,
    {
      lecture_id: parseInt(options.lectureId),
      user_id: parseInt(options.studentId),
      event_type: options.type,
      start_timestamp: options.timestamp,
      end_timestamp: options.timestamp,
      content: options.content,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }
  );
};

export const getEvents = async (id?: string): Promise<AggregateEvent[]> => {
  if (!id) {
    id = '666';
  }

  const res = await axios.get(
    `https://study-pal-api-gateway.azure-api.net/api/aggregated_event?lecture_id=${id}`
  );

  const rawEvents = res.data;

  const events: Array<AggregateEvent> = [];

  rawEvents.forEach((event: any) => {
    const time = event.aggregate_end_timestamp;
    const notes = event.aggregated_notes;
    const reactions = event.aggregated_reactions;

    const topNotes: Array<Note> = [];
    const topReactions: Array<Reaction> = [];

    for (let i = 0; i < 3; i += 1) {
      const note = notes[i];
      const reaction = reactions[i];
      if (note) {
        topNotes.push({
          studentId: note.user_id,
          timestamp: note.end_timestamp,
          content: note.payload,
        });
      }

      if (reaction) {
        topReactions.push({
          content: emojis[reaction.emoji],
          count: reaction.count,
        });
      }
    }

    events.push({
      timestamp: time,
      topReactions: topReactions,
      topNotes: topNotes,
    });
  });

  return events;
};
