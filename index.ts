/**
 * Enum representing log levels.
 * @enum {string}
 */
export enum LogLevel {
  /** Informational messages */
  INFO = 'INFO',
  /** Warning messages */
  WARN = 'WARN',
  /** Error messages */
  ERROR = 'ERROR',
}

/**
 * Formats a log message with a timestamp and log level.
 *
 * @param {string} message - The log message to format.
 * @param {LogLevel} [level=LogLevel.INFO] - The log level for the message.
 * @returns {string} The formatted log message.
 *
 * @example
 * const logMessage = formatLog('This is an info message');
 * // Output: [2024-07-19T12:34:56.789Z] [INFO] This is an info message
 *
 * @example
 * const logMessage = formatLog('This is a warning message', LogLevel.WARN);
 * // Output: [2024-07-19T12:34:56.789Z] [WARN] This is a warning message
 */
export function formatLog(message: string, level: LogLevel = LogLevel.INFO): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message}`;
}
