export const getStepLabel = (stepOrdinal: number) => {
  switch (stepOrdinal) {
    case 0:
      return 'Goal';
    case 1:
      return 'Industry';
    case 2:
      return 'Budget & Schedule';
    case 3:
      return 'Audience';
    case 4:
      return 'Placement';
    case 5:
      return 'Influencers';
    case 6:
      return 'Content Creation';
    default:
      return '';
  }
};
