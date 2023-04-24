/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Welcome } from ".";

test("loads and displays greeting", async () => {
  render(<Welcome name="Paul" />);

  await screen.findByRole("heading");

  expect(screen.getByRole("heading")).toHaveTextContent("Hello, Paul");
});
