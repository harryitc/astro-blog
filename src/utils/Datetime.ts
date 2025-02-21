/**
 * Utility class for formatting dates and times.
 */
export class DatetimeUtils {
    /**
     * Formats a date object into a specified format.
     * @param date - The date object to format.
     * @param format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
     * @returns The formatted date string.
     */
    static formatDate(date: Date, format: string): string {
        const map: { [key: string]: string } = {
            'MM': ('0' + (date.getMonth() + 1)).slice(-2),
            'DD': ('0' + date.getDate()).slice(-2),
            'YYYY': date.getFullYear().toString(),
            'HH': ('0' + date.getHours()).slice(-2),
            'mm': ('0' + date.getMinutes()).slice(-2),
            'ss': ('0' + date.getSeconds()).slice(-2),
        };

        return format.replace(/MM|DD|YYYY|HH|mm|ss/gi, matched => map[matched]);
    }

    /**
     * Formats a date object into 'HH:mm:ss' format.
     * @param date - The date object to format.
     * @returns The formatted time string.
     */
    static formatTime(date: Date): string {
        return this.formatDate(date, 'HH:mm:ss');
    }

    /**
     * Formats a date object into 'YYYY-MM-DD HH:mm:ss' format.
     * @param date - The date object to format.
     * @returns The formatted date-time string.
     */
    static formatDateTime(date: Date): string {
        return this.formatDate(date, 'YYYY-MM-DD HH:mm:ss');
    }

    /**
     * Formats a date object into 'YYYY-MM-DD' format.
     * @param date - The date object to format.
     * @returns The formatted date string.
     */
    static formatDateOnly(date: Date): string {
        return this.formatDate(date, 'YYYY-MM-DD');
    }

    /**
     * Formats a date object into a custom format.
     * @param date - The date object to format.
     * @param format - The custom format string.
     * @returns The formatted date string.
     */
    static formatCustom(date: Date, format: string): string {
        return this.formatDate(date, format);
    }

    /**
     * Formats a timestamp into 'DD/MM/YYYY' format.
     * @param timestamp - The timestamp to format.
     * @returns The formatted date string.
     */
    static formatTimestampToDDMMYYYY(timestamp: number): string {
        const date = new Date(timestamp);
        return this.formatDate(date, 'DD/MM/YYYY');
    }

    /**
     * Formats a date object into 'DD/MM/YYYY' format.
     * @param date - The date object to format.
     * @returns The formatted date string.
     */
    static formatDateToDDMMYYYY(date: Date): string {
        return this.formatDate(date, 'DD/MM/YYYY');
    }
    static parseDateFromDDMMYYYY(dateString: string): Date {
        const [day, month, year] = dateString.split('/');
        return new Date(+year, +month - 1, +day);
    }
}

// Example usage:
const timestamp = 1734566400000; // Example timestamp for 2025-02-18
console.log(DatetimeUtils.formatTimestampToDDMMYYYY(timestamp)); // Output: "18/02/2025"

const date = new Date('2025-02-18');
console.log(DatetimeUtils.formatDateToDDMMYYYY(date)); // Output: "18/02/2025"
