import React, { MouseEventHandler } from 'react';
import { FunctionComponent } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { postContent } from 'store/lecture/slice';
import { RootState } from 'store/store';

const QuickReactions: FunctionComponent = () => {
  const dispatch = useDispatch();
  const studentId = useSelector((state: RootState) => state.login.studentId);
  const lectureId = useSelector((state: RootState) => state.login.lectureId);
  const currentTime = useSelector(
    (state: RootState) => state.lecture.currentTime
  );

  const postContentPending = useSelector(
    (state: RootState) => state.lecture.postContentPending
  );

  const handleButtonClick = (emoji: string): MouseEventHandler => () => {
    dispatch(
      postContent({
        lectureId,
        studentId,
        timestamp: currentTime || 0,
        type: 'REACTION',
        content: emoji,
      })
    );
  };

  return (
    <div className="quick-reactions">
      <Typography
        variant="body1"
        color="secondary"
        style={{ marginLeft: 3, marginBottom: 5 }}
      >
        Quick Reactions
      </Typography>
      <div className="quick-reaction-buttons">
        <div className="quick-reaction-button-row">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('grinning_face_with_big_eyes')}
          >
            😃
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('grinning_face_with_sweat')}
          >
            😅
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('face_with_tears_of_joy')}
          >
            😂
          </Button>
        </div>
        <div className="quick-reaction-button-row">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('squinting_face_with_tongue')}
          >
            😝
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('thinking_face')}
          >
            🤔
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('sleepy_face')}
          >
            😴
          </Button>
        </div>
        <div className="quick-reaction-button-row">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('frowning_face')}
          >
            &#9785;
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('fearful_face')}
          >
            😨
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="quick-react-button"
            disabled={postContentPending}
            onClick={handleButtonClick('angry_face')}
          >
            😠
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickReactions;
