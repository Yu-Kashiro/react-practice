import { Avatar } from "@chakra-ui/react/avatar";
import { Box } from "@chakra-ui/react/box";
import { Button } from "@chakra-ui/react/button";
import { HStack } from "@chakra-ui/react/stack";
import { Heading } from "@chakra-ui/react/typography";
import React, { PropsWithChildren, useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
}

export const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  const { isLoggedIn, logout, userName } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return(
    <>
      <Box as="main" w="720px" mx="auto" mt="20">
        <HStack as="header" justifyContent="space-between" spacing='4'>
          <Heading as='h2' size='2xl'>
            {title}
          </Heading>
          <HStack justifyContent="end" spacing='4'>
            <HStack spacing='2'>
              <Avatar size='sm'/>
              <Box>{userName}</Box>
            </HStack>
            <Box>
              <Button onClick={logout} colorScheme='red' size='sm' p='5'>ログアウト</Button>
            </Box>
          </HStack>
        </HStack>
        <Box>
          {children}
        </Box>
      </Box>
    </>
  );
};