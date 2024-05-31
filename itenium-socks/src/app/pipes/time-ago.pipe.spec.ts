import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('should return "Just now" for a date less than 30 seconds ago', () => {
    const date = new Date(Date.now() - 25 * 1000); // 25 seconds ago
    expect(pipe.transform(date)).toBe('less than a minute ago');
  });

  it('should return 1 minute for a date just less than 1 minute ago', () => {
    const date = new Date(Date.now() - 55 * 1000); // 55 seconds ago
    expect(pipe.transform(date)).toBe('1 minute ago');
  });

  it('should return "44 minutes ago" for a date less than 1 hour ago', () => {
    const date = new Date(Date.now() - 44 * 60 * 1000); // 44 minutes ago
    expect(pipe.transform(date)).toBe('44 minutes ago');
  });

  it('should return "about 1 hour ago" for a date less than 2 hours ago', () => {
    const date = new Date(Date.now() - 61 * 60 * 1000); // 61 minutes ago
    expect(pipe.transform(date)).toBe('about 1 hour ago');
  });

  it('should return "about 23 hours ago" for a date less than 1 day ago', () => {
    const date = new Date(Date.now() - 23 * 60 * 60 * 1000); // 23 hours ago
    expect(pipe.transform(date)).toBe('about 23 hours ago');
  });

  it('should return "1 day ago" for a date less than 2 days ago', () => {
    const date = new Date(Date.now() - 25 * 60 * 60 * 1000); // 25 hours ago
    expect(pipe.transform(date)).toBe('1 day ago');
  });

  it('should return "30 days ago" for a date less than 1 month ago', () => {
    const date = new Date(Date.now() - 30 * 24 * 60 * 60 * 999); // 30 days ago
    expect(pipe.transform(date)).toBe('30 days ago');
  });

  it('should return "1 month ago" for a date less than 2 months ago', () => {
    const date = new Date(Date.now() - 44 * 24 * 60 * 60 * 1000); // 44 days ago
    expect(pipe.transform(date)).toBe('about 1 month ago');
  });

  it('should return "11 months ago" for a date less than 1 year ago', () => {
    const date = new Date(Date.now() - 11 * 30 * 24 * 60 * 60 * 1000); // 11 months ago
    expect(pipe.transform(date)).toBe('11 months ago');
  });

  it('should return "1 year ago" for a date less than 2 years ago', () => {
    const date = new Date(Date.now() - 13 * 30 * 24 * 60 * 60 * 1000); // 13 months ago
    expect(pipe.transform(date)).toBe('about 1 year ago');
  });
});
