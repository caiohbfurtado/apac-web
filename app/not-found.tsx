import { Container, Section, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container as="main" size="content" gutter="md" className="py-16">
      <Section
        heading={
          <Stack gap="sm">
            <Heading as="h1" size="lg">
              Pagina nao encontrada
            </Heading>
            <Text tone="muted">
              O conteudo que voce procurou nao esta disponivel. Confira o endereco ou volte para a
              pagina inicial.
            </Text>
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
