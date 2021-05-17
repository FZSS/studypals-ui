import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FunctionComponent } from 'react';
import 'components/LectureView/NoteInput/styles.css';
import { Icon, InputAdornment, TextField, Typography } from '@material-ui/core';
import { calculateTimeElapsed } from 'utils/lectureUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import QuickReactions from 'components/LectureView/NoteInput/QuickReactions';
import { postContent } from 'store/lecture/slice';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';

const NoteInput: FunctionComponent = () => {
  const dispatch = useDispatch();
  const studentId = useSelector((state: RootState) => state.login.studentId);
  const lectureId = useSelector((state: RootState) => state.login.lectureId);
  const startTime = useSelector(
    (state: RootState) => state.lecture.lectureStartTime
  );
  const currentTime = useSelector(
    (state: RootState) => state.lecture.currentTime
  );

  const [note, setNote] = useState('');

  const postContentPending = useSelector(
    (state: RootState) => state.lecture.postContentPending
  );

  useEffect(() => {
    if (postContentPending == false) setNote('');
  }, [postContentPending]);

  const onNoteChange: StandardInputProps['onChange'] = (event) =>
    setNote(event.target.value);

  const onEnterPressed: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(
        postContent({
          lectureId,
          studentId,
          timestamp: currentTime || 0,
          type: 'NOTES',
          content: note,
        })
      );
    }
  };

  return (
    <div className="note-input">
      <div className="sentence-input">
        <TextField
          disabled={postContentPending}
          className="sentence-input-text-field"
          label="My thoughts..."
          value={note}
          helperText={calculateTimeElapsed(startTime, currentTime)}
          autoFocus={true}
          onChange={onNoteChange}
          onKeyUp={onEnterPressed}
        />
      </div>
      <QuickReactions />
    </div>
  );
};

export default NoteInput;
