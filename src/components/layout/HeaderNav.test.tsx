import { fireEvent, render, screen, within } from "@testing-library/react";
import { HeaderNav } from "./HeaderNav";

describe("HeaderNav", () => {
  it("renders semantic navigation and desktop links", () => {
    render(<HeaderNav />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Principal" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Início" })[0]).toHaveAttribute(
      "href",
      "#fundacao",
    );
    expect(screen.getAllByRole("link", { name: "Atuação" })[0]).toHaveAttribute("href", "#atuacao");
    expect(
      screen.getAllByRole("link", { name: "Preciso de apoio" })[0],
    ).toHaveAttribute("href", "#preciso-de-apoio");
    expect(screen.getAllByRole("link", { name: "Preciso de apoio" })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "Transparência" })[0]).toHaveAttribute(
      "href",
      "#transparencia",
    );
    expect(screen.getAllByRole("link", { name: "Quero ajudar" })[0]).toHaveAttribute(
      "href",
      "#como-ajudar",
    );
  });

  it("toggles the mobile menu and supports closing on escape", () => {
    render(<HeaderNav />);

    const toggleButton = screen.getByRole("button", { name: "Abrir menu principal" });
    const desktopNav = screen.getByRole("navigation", { name: "Principal" });
    const desktopAcoesLink = within(desktopNav).getByRole("link", { name: "Preciso de apoio" });
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(desktopAcoesLink).toHaveAttribute("href", "#preciso-de-apoio");
    expect(screen.queryAllByRole("link", { name: "Preciso de apoio" })).toHaveLength(2);

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.queryAllByRole("link", { name: "Preciso de apoio" })).toHaveLength(4);
    const mobileAcoesLink = screen.getAllByRole("link", { name: "Preciso de apoio" })[2];
    expect(mobileAcoesLink).toHaveAttribute("href", "#preciso-de-apoio");

    mobileAcoesLink.focus();
    fireEvent.keyDown(mobileAcoesLink, { key: "Escape" });

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(toggleButton).toHaveFocus();
    expect(screen.queryAllByRole("link", { name: "Preciso de apoio" })).toHaveLength(2);
  });

  it("closes mobile menu when clicking one of its links", () => {
    render(<HeaderNav />);

    const toggleButton = screen.getByRole("button", { name: "Abrir menu principal" });
    fireEvent.click(toggleButton);

    const mobileAcoesLink = screen.getAllByRole("link", { name: "Preciso de apoio" })[2];
    fireEvent.click(mobileAcoesLink);

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryAllByRole("link", { name: "Preciso de apoio" })).toHaveLength(2);
  });
});
