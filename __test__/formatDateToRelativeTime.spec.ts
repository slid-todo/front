import { formatDateToRelativeTime } from '@/utils/date';

describe('formatDateToRelativeTime 테스트', () => {
  const fixedDate = new Date('2024-12-23T00:00:00Z').getTime();

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(fixedDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('현재 날짜와 동일한 시간', () => {
    const now = new Date(fixedDate).toISOString();
    expect('지금').toBe(formatDateToRelativeTime(now));
  });

  it('5초 전', () => {
    const date = new Date(fixedDate - 5 * 1000).toISOString();
    expect('5초 전').toBe(formatDateToRelativeTime(date));
  });

  it('1분 전', () => {
    const date = new Date(fixedDate - 60 * 1000).toISOString();
    expect('1분 전').toBe(formatDateToRelativeTime(date));
  });

  it('2시간 전', () => {
    const date = new Date(fixedDate - 2 * 60 * 60 * 1000).toISOString();
    expect('2시간 전').toBe(formatDateToRelativeTime(date));
  });

  it('3일 전', () => {
    const date = new Date(fixedDate - 3 * 24 * 60 * 60 * 1000).toISOString();
    expect('3일 전').toBe(formatDateToRelativeTime(date));
  });

  it('미래 날짜 처리 (5초 후)', () => {
    const date = new Date(fixedDate + 5 * 1000).toISOString();
    expect('5초 후').toBe(formatDateToRelativeTime(date));
  });

  it.each([
    {
      input: fixedDate - 24 * 60 * 60 * 1000,
      expected: '어제',
      description: '어제 처리',
    },
    {
      input: fixedDate - 2 * 24 * 60 * 60 * 1000,
      expected: '그저께',
      description: '그저께 처리',
    },
    {
      input: fixedDate + 24 * 60 * 60 * 1000,
      expected: '내일',
      description: '내일 처리',
    },
    {
      input: fixedDate + 2 * 24 * 60 * 60 * 1000,
      expected: '모레',
      description: '모레 처리',
    },
  ])('$description', ({ input, expected }) => {
    const date = new Date(input).toISOString();
    expect(expected).toBe(formatDateToRelativeTime(date));
  });

  it('3일 전', () => {
    const date = new Date(fixedDate - 3 * 24 * 60 * 60 * 1000).toISOString();
    expect('3일 전').toBe(formatDateToRelativeTime(date));
  });

  it('빈 문자열 처리', () => {
    const date = '';
    expect('').toBe(formatDateToRelativeTime(date));
  });
});
