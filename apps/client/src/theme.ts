import { createTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";

// Retro green color palette
const retroGreen: MantineColorsTuple = [
  "#e8f5e9",
  "#c8e6c9",
  "#a5d6a7",
  "#81c784",
  "#66bb6a",
  "#4a9f4a", // primary
  "#43a047",
  "#388e3c",
  "#2e7d32",
  "#1b5e20",
];

// Amber accent for highlights
const retroAmber: MantineColorsTuple = [
  "#fff8e1",
  "#ffecb3",
  "#ffe082",
  "#ffd54f",
  "#ffca28",
  "#d4a017", // primary
  "#ffb300",
  "#ffa000",
  "#ff8f00",
  "#ff6f00",
];

export const theme = createTheme({
  primaryColor: "retroGreen",
  colors: {
    retroGreen,
    retroAmber,
  },
  fontFamily:
    "'IBM Plex Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
  fontFamilyMonospace:
    "'IBM Plex Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
  headings: {
    fontFamily:
      "'IBM Plex Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
    fontWeight: "700",
  },
  defaultRadius: "xs",
  components: {
    Button: {
      defaultProps: {
        radius: "xs",
      },
      styles: {
        root: {
          fontWeight: 600,
          textTransform: "uppercase" as const,
          letterSpacing: "0.5px",
        },
      },
    },
    Paper: {
      defaultProps: {
        radius: "xs",
      },
      styles: {
        root: {
          border: "1px solid var(--mantine-color-default-border)",
        },
      },
    },
    Table: {
      styles: {
        table: {
          fontFamily:
            "'IBM Plex Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
        },
      },
    },
  },
});
