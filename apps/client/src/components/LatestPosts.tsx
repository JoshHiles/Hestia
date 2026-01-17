import {
  Container,
  Title,
  Table,
  Text,
  Anchor,
  Paper,
  Group,
  Badge,
} from "@mantine/core";

interface Post {
  id: number;
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
  category: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "Remember when Stack Overflow was useful?",
    author: "oldschool_dev",
    replies: 42,
    lastActivity: "2 hours ago",
    category: "Nostalgia",
  },
  {
    id: 2,
    title: "Hand-written code appreciation thread",
    author: "no_copilot",
    replies: 128,
    lastActivity: "5 mins ago",
    category: "General",
  },
  {
    id: 3,
    title: "Best practices that ChatGPT will never understand",
    author: "human_coder",
    replies: 67,
    lastActivity: "1 hour ago",
    category: "Discussion",
  },
  {
    id: 4,
    title: "Weekly code review - actual human feedback wanted",
    author: "review_requester",
    replies: 23,
    lastActivity: "30 mins ago",
    category: "Code Review",
  },
  {
    id: 5,
    title: "The art of reading documentation (a lost skill?)",
    author: "rtfm_advocate",
    replies: 89,
    lastActivity: "3 hours ago",
    category: "Discussion",
  },
];

export function LatestPosts() {
  return (
    <Container size="lg" py="xl">
      <Group justify="space-between" align="center" mb="md">
        <Title
          order={3}
          style={{
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          :: Latest Discussions ::
        </Title>
        <Anchor
          href="#"
          size="sm"
          c="dimmed"
          style={{ textTransform: "uppercase" }}
        >
          View All &gt;&gt;
        </Anchor>
      </Group>

      <Paper p={0} withBorder>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: "50%" }}>TOPIC</Table.Th>
              <Table.Th>AUTHOR</Table.Th>
              <Table.Th ta="center">REPLIES</Table.Th>
              <Table.Th ta="right">LAST ACTIVITY</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {mockPosts.map((post) => (
              <Table.Tr key={post.id}>
                <Table.Td>
                  <Group gap="xs">
                    <Badge
                      size="xs"
                      variant="outline"
                      color="retroGreen"
                      radius="xs"
                    >
                      {post.category}
                    </Badge>
                    <Anchor href="#" underline="hover" c="inherit" fw={500}>
                      {post.title}
                    </Anchor>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" c="dimmed">
                    @{post.author}
                  </Text>
                </Table.Td>
                <Table.Td ta="center">
                  <Text size="sm">{post.replies}</Text>
                </Table.Td>
                <Table.Td ta="right">
                  <Text size="sm" c="dimmed">
                    {post.lastActivity}
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>

      <Text size="xs" c="dimmed" ta="center" mt="lg">
        ─────────────────────────────────────────────
      </Text>
    </Container>
  );
}
