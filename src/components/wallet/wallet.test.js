import { renderWithProviders } from "../../redux/utils/test-util";
import Wallet from "./wallet";
import { screen } from "@testing-library/react";

describe("Wallet", () => {
  const initialState = { balance: 0 };

  function Component() {
    return renderWithProviders(<Wallet />, { initialState });
  }

  it("renders properly", () => {
    const { container } = Component();
    expect(container).toMatchSnapshot();
  });

  it("displays the balance from useSelector", () => {
    Component();
    expect(screen.getByTestId("balance-text").innerHTML).toEqual("Wallet balance:0");
  });
});
