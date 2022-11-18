import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Timer } from "../../../view/components/Timer";

describe("Timer", () => {
  it("renders the timer in the screen", () => {
    render(<Timer timeInSeconds={20} />);
    const timer = screen.getByText("00:20");
    expect(timer).toBeInTheDocument();
  });
});
