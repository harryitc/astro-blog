import readingTime, { type Options } from 'reading-time';

/**
 * @example
 * ->
    stats: {
    text: '1 min read',
    minutes: 1,
    time: 60000,
    words: 200
    }
 */
export const ReadingTime = (text: string, options?: Options) => {
    return readingTime(text, options);
}