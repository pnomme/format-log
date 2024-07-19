import { assertEquals } from "@std/assert";
import { LogLevel, formatLog } from "./index.ts";

Deno.test("formatLog should format an info message correctly", () => {
  const message = "This is an info message";
  const formattedMessage = formatLog(message);
  
  const regex = /^\[(.*?)\] \[(.*?)\] (.*)$/;
  const match = formattedMessage.match(regex);

  if (match) {
    const [, timestamp, level, msg] = match;
    const expectedLevel = 'INFO';
    const expectedMessage = 'This is an info message';

    assertEquals(level, expectedLevel);
    assertEquals(msg, expectedMessage);
  } else {
    throw new Error("Log format is incorrect");
  }
});

Deno.test("formatLog should format a warning message correctly", () => {
  const message = "This is a warning message";
  const formattedMessage = formatLog(message, LogLevel.WARN);
  
  const regex = /^\[(.*?)\] \[(.*?)\] (.*)$/;
  const match = formattedMessage.match(regex);

  if (match) {
    const [, timestamp, level, msg] = match;
    const expectedLevel = 'WARN';
    const expectedMessage = 'This is a warning message';

    assertEquals(level, expectedLevel);
    assertEquals(msg, expectedMessage);
  } else {
    throw new Error("Log format is incorrect");
  }
});

Deno.test("formatLog should format an error message correctly", () => {
  const message = "This is an error message";
  const formattedMessage = formatLog(message, LogLevel.ERROR);
  
  const regex = /^\[(.*?)\] \[(.*?)\] (.*)$/;
  const match = formattedMessage.match(regex);

  if (match) {
    const [, timestamp, level, msg] = match;
    const expectedLevel = 'ERROR';
    const expectedMessage = 'This is an error message';

    assertEquals(level, expectedLevel);
    assertEquals(msg, expectedMessage);
  } else {
    throw new Error("Log format is incorrect");
  }
});
