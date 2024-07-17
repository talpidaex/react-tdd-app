import { render } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./redux/utils/test-util";
import { setupStore } from "./redux/store";
import { balanceAdded } from "./redux/reducers/balanceSlice";

describe("App", () => {
  const { container } = render(<App />);

  it("render properly", () => {
    expect(container).toMatchSnapshot();
  });

  test("Uses preloaded state to render", () => {
    const store = setupStore();
    store.dispatch(balanceAdded(1000));
    renderWithProviders(<App />, { store });
  });
});
