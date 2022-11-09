import Main from "components/Main";
import { render, screen } from "mocks/testUtils";

describe("Main component tests", () => {
  it("show loader before content is loaded", () => {
    render(<Main />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
