import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../../../view/components/Button";

describe("Button", () => {
  it("renders the stop button", () => {
    render(<Button isRunning={true} />);
    const button = screen.getByRole("button", { name: "STOP" });
    expect(button).toBeInTheDocument();
  });

  it("renders the stop button", () => {
    render(<Button isRunning={false} />);
    const button = screen.getByRole("button", { name: "START" });
    expect(button).toBeInTheDocument();
  });
});
