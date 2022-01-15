import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />

    <Outlet />
  </ChakraProvider>
);
