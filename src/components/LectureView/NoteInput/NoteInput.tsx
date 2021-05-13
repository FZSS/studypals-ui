import React from 'react';
import { FunctionComponent } from 'react';
import 'components/LectureView/NoteInput/styles.css';
import { Icon, InputAdornment, TextField, Typography } from '@material-ui/core';
import { calculateTimeElapsed } from 'utils/lectureUtils';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import QuickReactions from 'components/LectureView/NoteInput/QuickReactions';

const NoteInput: FunctionComponent = () => {
  const startTime = useSelector(
    (state: RootState) => state.lecture.lectureStartTime
  );
  const currentTime = useSelector(
    (state: RootState) => state.lecture.currentTime
  );

  return (
    <div className="note-input">
      <QuickReactions />
      <div className="sentence-input">
        <TextField
          className="sentence-input-text-field"
          label="My thoughts..."
          helperText={calculateTimeElapsed(startTime, currentTime)}
          focused={true}
        />
      </div>
    </div>
  );
};

export default NoteInput;
