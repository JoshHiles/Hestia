import { Container, Text, Group, Anchor, Box, Stack } from "@mantine/core";

export function Footer() {
  return (
    <Box
      component="footer"
      py="xl"
      mt="xl"
      style={{
        borderTop: "2px solid var(--mantine-color-default-border)",
      }}
    >
      <Container size="lg">
        <Stack gap="md" align="center">
          <Text
            size="xs"
            c="dimmed"
            style={{ fontFamily: "monospace", letterSpacing: "1px" }}
          >
            ╔═══════════════════════════════════════════════════════╗
          </Text>

          <Text size="sm" c="dimmed" ta="center">
            Made by humans, for humans.
          </Text>

          <Group gap="lg" justify="center">
            <Anchor href="#" size="xs" c="dimmed" underline="hover">
              About
            </Anchor>
            <Text size="xs" c="dimmed">
              |
            </Text>
            <Anchor href="#" size="xs" c="dimmed" underline="hover">
              Rules
            </Anchor>
            <Text size="xs" c="dimmed">
              |
            </Text>
            <Anchor href="#" size="xs" c="dimmed" underline="hover">
              Contact
            </Anchor>
            <Text size="xs" c="dimmed">
              |
            </Text>
            <Anchor href="#" size="xs" c="dimmed" underline="hover">
              Source Code
            </Anchor>
          </Group>

          <Text
            size="xs"
            c="dimmed"
            style={{ fontFamily: "monospace", letterSpacing: "1px" }}
          >
            ╚═══════════════════════════════════════════════════════╝
          </Text>

          <Text size="xs" c="dimmed">
            visitors: [####....] 1,337 | online: 42
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
