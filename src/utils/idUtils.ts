export const mapStudentIdToName = (id: string | undefined) => {
  switch (id) {
    case 'fc352':
      return 'Kevin Chen'
    default:
      return 'Some Body'
  }
}

export const mapLectureIdToName = (id: string | undefined) => {
  switch (id) {
    case '123':
      return 'Cloud Computing: Lecture 1'
    default:
      return 'Cloud Computing: Lecture 32'
  }
}
