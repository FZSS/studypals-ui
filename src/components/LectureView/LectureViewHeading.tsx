import * as React from 'react';
import { FunctionComponent, useEffect, useState } from 'react';
import { Breadcrumbs, Link, Icon, Avatar, Typography } from '@material-ui/core';

// @ts-ignore
import image from '../../images/rachel.png';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { mapLectureIdToName, mapStudentIdToName } from 'utils/idUtils';
import { QueryBuilder } from '@material-ui/icons';
import { calculateTimeElapsedText } from 'utils/lectureUtils';
import { updateCurrentTime } from 'store/lecture/slice';

const LectureViewHeading: FunctionComponent = () => {
  const dispatch = useDispatch();

  const studentId = useSelector((state: RootState) => state.login.studentId);
  const lectureId = useSelector((state: RootState) => state.login.lectureId);

  const studentName = mapStudentIdToName(studentId);
  const LectureName = mapLectureIdToName(lectureId);

  const startTime = useSelector(
    (state: RootState) => state.lecture.lectureStartTime
  );
  const currentTime = useSelector(
    (state: RootState) => state.lecture.currentTime
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCurrentTime(Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lecture-header">
      <Typography variant="body1" color="secondary" noWrap display="inline">
        {LectureName}
      </Typography>
      <div className="lecture-header-timer">
        <Icon color="disabled">
          <QueryBuilder />
        </Icon>
        <Typography
          style={{ marginLeft: 10, color: 'grey' }}
          variant="body1"
          noWrap
          display="inline"
        >
          {calculateTimeElapsedText(startTime, currentTime)}
        </Typography>
      </div>
      <div className="lecture-header-right">
        <Typography
          variant="body2"
          color="textSecondary"
          noWrap
          display="inline"
        >
          {`${studentName} (${studentId})`}
        </Typography>
        <Avatar
          className="lecture-header-right-avatar"
          alt="Remy Sharp"
          src={image}
        />
      </div>
    </div>
  );
};

export default LectureViewHeading;
