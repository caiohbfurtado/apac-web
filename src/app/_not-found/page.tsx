import Link from "next/link";
import { Container, Section, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

export default function InternalNotFoundPage() {
  return (
    <Container as="main" size="content" gutter="md" className="py-16">
      <Section
        heading={
          <Stack gap="sm">
            <Heading as="h1" size="lg">
              Pagina nao encontrada
            </Heading>
            <Text tone="muted">O endereco nao corresponde a nenhuma pagina do site.</Text>
          </Stack>
        }
        actions={
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-strong"
          >
            Ir para a home
          </Link>
        }
      />
    </Container>
  );
}

