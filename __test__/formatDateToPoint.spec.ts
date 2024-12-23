import { formatDateToPoint } from '@/utils/date';

describe('formatDateToPoint 테스트', () => {
  it('정상 작동 테스트', () => {
    const date = '2024-12-23';
    expect('24.12.23').toBe(formatDateToPoint(date));
  });

  it('잘못된 날짜 형식 (빈 문자열)', () => {
    const date = '';
    expect('').toBe(formatDateToPoint(date));
  });

  it('윤년 날짜 처리', () => {
    const date = '2024-02-29';
    expect('24.02.29').toBe(formatDateToPoint(date));
  });

  it('시간 포함된 날짜 처리', () => {
    const date = '2024-12-23T14:30:00';
    expect('24.12.23').toBe(formatDateToPoint(date));
  });

  it('다른 날짜 형식 테스트', () => {
    const date = '12/23/2024';
    expect('24.12.23').toBe(formatDateToPoint(date));
  });
});
