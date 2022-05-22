import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("The Header component should render properly", () => {
    const { getByText } = render(<App />);
    getByText(/Karina Store/i);
    getByText(/Dark Mode/i);
    getByText(/All rights reserved - Karina Prado 2022/i);
    //expect(screen.getByRole("heading", { name: /Productos/i }));
  });
});
