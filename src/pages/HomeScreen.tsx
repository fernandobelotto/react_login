import { Button, Heading } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function HomeScreen(): ReactElement {
  return (
    <>
      <Heading>Home Screen</Heading>
      <Button as={RouterLink} to="/">
        Logout
      </Button>
    </>
  );
}
