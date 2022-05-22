import { render } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  test("Home component should render properly", () => {
    const { getByText } = render(<Home />);
    getByText(/productos/i);
  });
});
