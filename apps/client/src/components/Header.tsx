import {
  Group,
  Title,
  ActionIcon,
  useMantineColorScheme,
  Container,
  Box,
  Anchor,
} from "@mantine/core";

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      component="header"
      py="md"
      style={{
        borderBottom: "2px solid var(--mantine-color-default-border)",
      }}
    >
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Title
              order={1}
              size="h3"
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              [ Hestia ]
            </Title>
          </Group>

          <Group gap="md">
            <Anchor
              href="#"
              underline="hover"
              c="dimmed"
              size="sm"
              style={{ textTransform: "uppercase", letterSpacing: "1px" }}
            >
              Browse
            </Anchor>
            <Anchor
              href="#"
              underline="hover"
              c="dimmed"
              size="sm"
              style={{ textTransform: "uppercase", letterSpacing: "1px" }}
            >
              Login
            </Anchor>
            <ActionIcon
              variant="outline"
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              size="lg"
              radius="xs"
            >
              {colorScheme === "dark" ? "SUN" : "MOON"}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
