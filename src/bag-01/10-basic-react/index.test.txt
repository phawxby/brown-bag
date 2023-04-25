/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Welcome } from ".";

test("loads and displays greeting", async () => {
  render(<Welcome name="Paul" />);

  expect(screen.getByRole("heading")).toHaveTextContent("Hello, Paul");
  expect(() => screen.getByRole("button")).toThrowError();
});

test("buttons work", async () => {
  const clickMock = vi.fn();

  render(<Welcome name="Paul" onClick={clickMock} />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Click me");

  expect(clickMock).not.toHaveBeenCalled();

  fireEvent.click(button);

  expect(clickMock).toHaveBeenCalled();
});
