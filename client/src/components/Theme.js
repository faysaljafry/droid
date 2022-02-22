// theme.js
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Drawer: {
      sizes: {
        xl: {
          h: "56px",
          fontSize: "md",
          px: "16px",
        },
      },
      baseStyle: {
        dialog: {
          width: "95.8%",
          height: "100vh",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(26, 32, 44, 0.96)",
        },
        closeButton: {
          bg: "blue.500",
          color: "white",
        },
        header: {},
      },
    },
  },
});
