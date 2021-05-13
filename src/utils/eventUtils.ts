import { AggregateEvent } from 'store/lecture/state';

export const getFakeEvents = (): AggregateEvent[] => {
  return [
    {
      timestamp: 1620882443525,
      topNotes: [
        {
          content: 'Hello world',
        },
        {
          content: 'Hello world 2',
        },
        {
          content: 'Hello world 3',
        },
      ],
      topReactions: [
        {
          content: '\u2728',
          count: 123,
        },
        {
          content: '\u2728',
          count: 12,
        },
        {
          content: '\u2728',
          count: 1,
        },
      ],
    },
    {
      timestamp: 1620882453525,
      topNotes: [
        {
          content: 'Hello world',
        },
        {
          content: 'Hello world 2',
        },
        {
          content: 'Hello world 3',
        },
      ],
      topReactions: [
        {
          content: '\u2728',
          count: 123,
        },
        {
          content: '\u2728',
          count: 12,
        },
        {
          content: '\u2728',
          count: 1,
        },
      ],
    },
    {
      timestamp: 1620882483525,
      topNotes: [
        {
          content: 'Hello world',
        },
        {
          content: 'Hello world 2',
        },
        {
          content: 'Hello world 3',
        },
      ],
      topReactions: [
        {
          content: '\u2728',
          count: 123,
        },
        {
          content: '\u2728',
          count: 12,
        },
        {
          content: '\u2728',
          count: 1,
        },
      ],
    },
    {
      timestamp: 1620882743525,
      topNotes: [
        {
          content: 'Hello world',
        },
        {
          content: 'Hello world 2',
        },
        {
          content: 'Hello world 3',
        },
      ],
      topReactions: [
        {
          content: '\u2728',
          count: 123,
        },
        {
          content: '\u2728',
          count: 12,
        },
        {
          content: '\u2728',
          count: 1,
        },
      ],
    },
    {
      timestamp: 1620883443525,
      topNotes: [
        {
          content: 'Hello world',
        },
        {
          content: 'Hello world 2',
        },
        {
          content: 'Hello world 3',
        },
      ],
      topReactions: [
        {
          content: '\u2728',
          count: 123,
        },
        {
          content: '\u2728',
          count: 12,
        },
        {
          content: '\u2728',
          count: 1,
        },
      ],
    },
    {
      timestamp: 1620892443525,
      topNotes: [
        {
          content: 'Hello world',
        },
        {
          content: 'Hello world 2',
        },
        {
          content: 'Hello world 3',
        },
      ],
      topReactions: [
        {
          content: '\u2728',
          count: 123,
        },
        {
          content: '\u2728',
          count: 12,
        },
        {
          content: '\u2728',
          count: 1,
        },
      ],
    },
  ];
};
