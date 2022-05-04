import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "intersection-observer";
import App from "./App";
import "aos";

describe("App", () => {
  test("Should render App", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const app = getByTestId("AppTestId");
    expect(app).toBeDefined();
  });
});
