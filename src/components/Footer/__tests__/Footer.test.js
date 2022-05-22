import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("Footer component should render properly", () => {
    const { getByText } = render(<Footer />);
    getByText(/All rights reserved - Karina Prado 2022/i);
  });
});
