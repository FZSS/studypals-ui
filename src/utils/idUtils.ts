export const mapStudentIdToName = (id: string | undefined) => {
  switch (id) {
    case '123':
      return 'Alex Jing';
    case '124':
      return 'Kevin Chen';
    case '125':
      return 'Rider Wang';
    case 'fc352':
      return 'Kevin Chen';
    default:
      return 'Some Body';
  }
};

export const mapLectureIdToName = (id: string | undefined) => {
  switch (id) {
    case '5436':
      return 'Privacy in the Digital Age: Lecture 11';
    case '123':
      return 'Cloud Computing: Lecture 1';
    default:
      return 'Cloud Computing: Lecture 32';
  }
};
