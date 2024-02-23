import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "white" : "white",
        color: props.colorMode === 'dark' ? '#010851' : '#010851',
      },
    }),
  },
});
export default Theme;
