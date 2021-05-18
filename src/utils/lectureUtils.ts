// TODO: replace with real api if any
import { FAKE_START_TIME } from 'store/lecture/state';

export const getLectureStartTime = (lectureId: string | undefined) => {
  switch (lectureId) {
    case '5436':
      return 1621351760328;
    default:
      return FAKE_START_TIME;
  }
};

export const calculateTimeElapsedText = (
  start: number | undefined,
  now: number | undefined
): string => {
  if (!start || !now) return '';

  const seconds = Math.round((now - start) / 1000);

  let secondsFormatted = '00';
  if (seconds % 60 < 10) {
    secondsFormatted = '0' + `${seconds % 60} seconds`;
  } else {
    secondsFormatted = `${seconds % 60} seconds`;
  }

  const minutes = Math.floor(seconds / 60);
  let minutesFormatted;
  if (minutes === 0) {
    minutesFormatted = '';
  } else if (minutes % 60 < 10) {
    minutesFormatted = '0' + `${minutes % 60} minutes: `;
  } else {
    minutesFormatted = `${minutes % 60} minutes: `;
  }

  const hours = Math.floor(minutes / 60);
  let hoursFormatted;

  if (hours == 0) {
    hoursFormatted = '';
  } else if (hours < 10) {
    hoursFormatted = '0' + `${hours} hours: `;
  } else {
    hoursFormatted = `${hours} hours: `;
  }

  return `+ ${hoursFormatted}${minutesFormatted}${secondsFormatted}`;
};

export const calculateTimeElapsed = (
  start: number | undefined,
  now: number | undefined
): string => {
  if (!start || !now) return '';

  const seconds = Math.round((now - start) / 1000);

  let secondsFormatted = '00';
  if (seconds % 60 < 10) {
    secondsFormatted = '0' + `${seconds % 60}`;
  } else {
    secondsFormatted = `${seconds % 60}`;
  }

  const minutes = Math.floor(seconds / 60);
  let minutesFormatted = '00';

  if (minutes % 60 < 10) {
    minutesFormatted = '0' + `${minutes % 60}:`;
  } else {
    minutesFormatted = `${minutes % 60}:`;
  }

  const hours = Math.floor(minutes / 60);
  let hoursFormatted = '00';

  if (hours < 10) {
    hoursFormatted = '0' + `${hours}:`;
  } else {
    hoursFormatted = `${hours}:`;
  }

  return `+${hoursFormatted}${minutesFormatted}${secondsFormatted}`;
};
