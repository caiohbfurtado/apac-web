import { fireEvent, render, screen, within } from "@testing-library/react";
import { HeaderNav } from "./HeaderNav";

describe("HeaderNav", () => {
  it("renders semantic navigation and desktop links", () => {
    render(<HeaderNav />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Principal" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Fundacao" })[0]).toHaveAttribute(
      "href",
      "#fundacao",
    );
    expect(screen.getAllByRole("link", { name: "Contato" })[0]).toHaveAttribute(
      "href",
      "#quero-ajudar",
    );
  });

  it("toggles the mobile menu and supports closing on escape", () => {
    render(<HeaderNav />);

    const toggleButton = screen.getByRole("button", { name: "Abrir menu principal" });
    const desktopNav = screen.getByRole("navigation", { name: "Principal" });
    const desktopAcoesLink = within(desktopNav).getByRole("link", { name: "Acoes" });
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(desktopAcoesLink).toHaveAttribute("href", "#playground-botoes");
    expect(screen.queryAllByRole("link", { name: "Acoes" })).toHaveLength(1);

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.queryAllByRole("link", { name: "Acoes" })).toHaveLength(2);
    const mobileAcoesLink = screen.getAllByRole("link", { name: "Acoes" })[1];
    expect(mobileAcoesLink).toHaveAttribute("href", "#playground-botoes");

    mobileAcoesLink.focus();
    fireEvent.keyDown(mobileAcoesLink, { key: "Escape" });

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(toggleButton).toHaveFocus();
    expect(screen.queryAllByRole("link", { name: "Acoes" })).toHaveLength(1);
  });

  it("closes mobile menu when clicking one of its links", () => {
    render(<HeaderNav />);

    const toggleButton = screen.getByRole("button", { name: "Abrir menu principal" });
    fireEvent.click(toggleButton);

    const mobileAcoesLink = screen.getAllByRole("link", { name: "Acoes" })[1];
    fireEvent.click(mobileAcoesLink);

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryAllByRole("link", { name: "Acoes" })).toHaveLength(1);
  });
});
