import Link from "next/link";
import { Container, Section, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

export default function GlobalErrorFallbackPage() {
  return (
    <Container as="main" size="content" gutter="md" className="py-16">
      <Section
        heading={
          <Stack gap="sm">
            <Heading as="h1" size="lg">
              Erro inesperado
            </Heading>
            <Text tone="muted">
              Algo falhou ao renderizar esta pagina. Tente recarregar ou volte para a home.
            </Text>
          </Stack>
        }
        actions={
          <Stack direction="vertical" gap="sm" className="sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-strong"
            >
              Ir para a home
            </Link>
            <a
              href=""
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-line bg-white px-6 py-3 text-base font-semibold text-ink transition hover:border-brand/40 hover:bg-brand-soft/40"
            >
              Recarregar
            </a>
          </Stack>
        }
      />
    </Container>
  );
}

