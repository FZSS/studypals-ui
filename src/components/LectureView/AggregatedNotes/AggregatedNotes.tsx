import React from 'react';
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
import { Badge, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { getFakeEvents } from 'utils/eventUtils';
import { calculateTimeElapsed } from 'utils/lectureUtils';

const AggregatedNotes: FunctionComponent = () => {
  const startTime = useSelector(
    (state: RootState) => state.lecture.lectureStartTime
  );

  let events = useSelector(
    (state: RootState) => state.lecture.aggregatedEvents
  );

  // TODO: call api every 10 seconds

  events = getFakeEvents();

  return (
    <div className="aggregated-events">
      <Timeline>
        {events.map((event) => (
          <TimelineItem key={event.timestamp}>
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
                    {event.topNotes.map((note, i) => (
                      <Typography key={i} variant="body2">
                        {i + 1}. {note.content}
                      </Typography>
                    ))}
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
    </div>
  );
};

export default AggregatedNotes;
