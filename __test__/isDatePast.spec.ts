import { isDatePast } from '@/utils/date';

describe('isDatePast 테스트', () => {
  const fixedDate = new Date('2024-12-20T00:00:00Z');

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(fixedDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('과거 날짜인 경우', () => {
    const date = '2024-12-19';
    expect(isDatePast(date)).toBe(true);
  });

  it('오늘 날짜인 경우', () => {
    const date = '2024-12-20';
    expect(isDatePast(date)).toBe(false);
  });

  it('미래 날짜인 경우', () => {
    const date = '2024-12-21';
    expect(isDatePast(date)).toBe(false);
  });

  it('빈 문자열 처리', () => {
    const date = '';
    expect(isDatePast(date)).toBe(false);
  });
});
