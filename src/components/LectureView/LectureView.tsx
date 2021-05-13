import * as React from 'react';

import { FunctionComponent } from 'react';
import 'components/LectureView/styles.css';
import LectureViewHeading from 'components/LectureView/LectureViewHeading';
import NoteInput from 'components/LectureView/NoteInput/NoteInput';
import AggregatedNotes from 'components/LectureView/AggregatedNotes/AggregatedNotes';
import MyNotes from 'components/LectureView/MyNotes/MyNotes';

const LectureView: FunctionComponent = () => {
  return (
    <div>
      <div className="lecture-view">
        <LectureViewHeading />
        <div className="all-notes">
          <AggregatedNotes />
          <MyNotes />
        </div>
        <NoteInput />
      </div>
    </div>
  );
};
export default LectureView;
