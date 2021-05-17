import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';

import 'components/LectureView/MyNotes/styles.css';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getContents } from 'store/lecture/slice';
import { RootState } from 'store/store';
import { calculateTimeElapsed } from 'utils/lectureUtils';
import { emojis } from 'api/studyPals';

const MyNotes: FunctionComponent = () => {
  const studentId = useSelector((state: RootState) => state.login.studentId);
  const lectureId = useSelector((state: RootState) => state.login.lectureId);
  const contents = useSelector((state: RootState) => state.lecture.myContents);
  const startTime = useSelector(
    (state: RootState) => state.lecture.lectureStartTime
  );
  const currentTime = useSelector(
    (state: RootState) => state.lecture.currentTime
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContents(studentId, lectureId));
  }, []);

  useEffect(() => {
    const myNotesDiv = document.getElementById('my-notes-div');
    if (myNotesDiv) {
      myNotesDiv.scrollTop = myNotesDiv.scrollHeight;
    }
  }, [contents]);

  return (
    <div className="my-notes" id="my-notes-div">
      <Typography align="center" variant="h5" color="primary">
        My notes
      </Typography>
      <div>
        {contents.map((content, i) => {
          let text = content.content;
          if (content.type === 'REACTION') {
            text = emojis[text];
          }

          return (
            <div key={i} className="my-note">
              <Typography variant="body2" className="my-note-timestamp">
                {calculateTimeElapsed(startTime, content.timestamp)}
              </Typography>
              <Typography variant="body2">{text}</Typography>
            </div>
          );
        })}
      </div>
      <div className="my-note-bottom" />
    </div>
  );
};

export default MyNotes;
