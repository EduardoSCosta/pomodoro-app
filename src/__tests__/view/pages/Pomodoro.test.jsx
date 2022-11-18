import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pomodoro } from "../../../view/pages/Pomodoro";

describe("Pomodoro", () => {
  it("renders alert", () => {
    render(<Pomodoro isRunning={true} />);
    const alert = screen.getByText("Time to focus!");
    expect(alert).toBeInTheDocument();
  });
});
