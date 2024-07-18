import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./redux/utils/test-util";
import { setupStore } from "./redux/store";
import { balanceAdded } from "./redux/reducers/balanceSlice";

describe("App", () => {
  function Component() {
    return renderWithProviders(<App />);
  }

  it("render properly", () => {
    const { container } = Component();
    expect(container).toMatchSnapshot();
  });

  test("Uses preloaded state to render", () => {
    const store = setupStore();
    store.dispatch(balanceAdded(1000));
    renderWithProviders(<App />, { store });
  });

  it("contains a Wallet Component", () => {
    Component();
    expect(screen.getByTestId("wallet-component")).not.toEqual(null);
  });
});
