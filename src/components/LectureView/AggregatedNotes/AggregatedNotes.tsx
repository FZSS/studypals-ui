import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';

import 'components/LectureView/AggregatedNotes/styles.css';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@material-ui/lab';
import {
  Badge,
  Paper,
  Typography,
  LinearProgress,
  CircularProgress,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { calculateTimeElapsed } from 'utils/lectureUtils';
import { fetchLectureEvents } from 'store/lecture/slice';
import { usePrevious } from 'utils/usePrevious';
import { mapStudentIdToName } from '../../../utils/idUtils';

const RETRIEVAL_INTERVAL = 10000;

const AggregatedNotes: FunctionComponent = () => {
  const lectureId = useSelector((state: RootState) => state.login.lectureId);
  const startTime = useSelector(
    (state: RootState) => state.lecture.lectureStartTime
  );

  const events = useSelector(
    (state: RootState) => state.lecture.aggregatedEvents
  );

  const pending = useSelector(
    (state: RootState) => state.lecture.aggregatedEventsPending
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLectureEvents(lectureId));
    const interval = setInterval(() => {
      dispatch(fetchLectureEvents(lectureId));
    }, RETRIEVAL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const prevEvents = usePrevious(events);

  useEffect(() => {
    // @ts-ignore
    if (prevEvents && prevEvents.length === events.length) return;
    const eventsDiv = document.getElementById('aggregated-events-div');
    if (eventsDiv) {
      eventsDiv.scrollTop = eventsDiv.scrollHeight;
    }
  }, [events]);

  return (
    <div className="aggregated-events" id="aggregated-events-div">
      <Typography align="center" variant="h5" color="primary">
        All events
      </Typography>
      <Timeline>
        {events.map((event, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {calculateTimeElapsed(startTime, event.timestamp)}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={2}>
                <div className="aggregated-event-content">
                  <div className="aggregated-event-content-notes">
                    {event.topNotes.map((note, i) => {
                      const name = mapStudentIdToName(note.studentId + '');
                      return (
                        <Typography key={i} variant="body2">
                          {i + 1}. {`(${name}) ${note.content}`}
                        </Typography>
                      );
                    })}
                  </div>
                  <div className="aggregated-event-content-reacts">
                    {event.topReactions.map((react, i) => (
                      <Badge
                        badgeContent={react.count}
                        color="secondary"
                        overlap="circle"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        key={i}
                      >
                        <div className="aggregated-event-content-react" key={i}>
                          {react.content}
                        </div>
                      </Badge>
                    ))}
                  </div>
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {pending ? (
        <CircularProgress size="25px" className="aggregated-events-progress" />
      ) : null}
    </div>
  );
};

export default AggregatedNotes;
