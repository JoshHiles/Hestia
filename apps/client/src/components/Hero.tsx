import { Container, Title, Text, Button, Group, Stack, Box } from "@mantine/core";

const ASCII_ART = `
    _    _           _   _
   | |  | |         | | (_)
   | |__| | ___  ___| |_ _  __ _
   |  __  |/ _ \\/ __| __| |/ _\` |
   | |  | |  __/\\__ \\ |_| | (_| |
   |_|  |_|\\___||___/\\__|_|\\__,_|
`;

export function Hero() {
  return (
    <Box py={60}>
      <Container size="md">
        <Stack align="center" gap="xl">
          <Text
            component="pre"
            size="xs"
            c="dimmed"
            style={{
              fontFamily: "monospace",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {ASCII_ART}
          </Text>

          <Stack align="center" gap="md">
            <Title
              order={2}
              ta="center"
              style={{
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              A Forum for Humans
            </Title>

            <Text
              size="lg"
              c="dimmed"
              ta="center"
              maw={500}
              style={{ lineHeight: 1.8 }}
            >
              Remember when developers wrote their own code? When Stack Overflow
              answers came from real experience? Welcome back to that era.
            </Text>

            <Text
              size="sm"
              c="dimmed"
              ta="center"
              style={{
                borderTop: "1px dashed var(--mantine-color-default-border)",
                borderBottom: "1px dashed var(--mantine-color-default-border)",
                padding: "12px 24px",
                marginTop: "8px",
              }}
            >
              No AI-generated content. No LLM summaries. Just humans helping
              humans.
            </Text>
          </Stack>

          <Group gap="md" mt="md">
            <Button size="md" variant="filled">
              Join the Discussion
            </Button>
            <Button size="md" variant="outline">
              Browse Topics
            </Button>
          </Group>

          <Text size="xs" c="dimmed" mt="lg">
            ═══════════════════════════════════════
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
