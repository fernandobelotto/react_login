import { Button, Heading } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
interface Props {}

export default function HomeScreen({}: Props): ReactElement {
  return (
    <>
      <Heading>Home Screen</Heading>
      <Button as={RouterLink} to="/">
        Logout
      </Button>
    </>
  );
}
