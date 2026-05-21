import DesignSystemPage from "@/app/design-system/page";
import {
  showcaseBadgeTones,
  showcaseButtonSizes,
  showcaseCardSamples,
} from "@/lib/design-system-showcase-fixtures";
import { renderWithProviders } from "@/test/test-utils";

describe("DesignSystemPage", () => {
  it("renderiza os grupos canonicos e os estados principais da showcase", () => {
    const { getByRole, getByText } = renderWithProviders(<DesignSystemPage />);

    expect(getByRole("heading", { name: "Design system APAC" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Primitives" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Acoes" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Superficies" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Formularios" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Navegacao" })).toBeInTheDocument();

    showcaseButtonSizes.forEach((size) => {
      expect(getByRole("button", { name: `Primary ${size}` })).toBeInTheDocument();
      expect(getByRole("button", { name: `Secondary ${size}` })).toBeInTheDocument();
      expect(getByRole("button", { name: `WhatsApp ${size}` })).toBeInTheDocument();
    });

    showcaseBadgeTones.forEach((tone) => {
      expect(getByText(tone)).toBeInTheDocument();
    });

    showcaseCardSamples.forEach((sample) => {
      expect(getByText(sample.title)).toBeInTheDocument();
    });
    expect(getByText("Card interativo")).toBeInTheDocument();
  });
});
