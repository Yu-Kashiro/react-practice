import * as React from "react";
import { useAuth } from "../hooks/use-auth";
import { Button } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/typography";
import { Input } from "@chakra-ui/react/input";
import { Box } from "@chakra-ui/react/box";
import { HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const { isLoggedIn, isLoginCheckDone, login, userName, setUserName } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoginCheckDone && isLoggedIn) {
      navigate("/todo");
    }
  }, [isLoggedIn, isLoginCheckDone]);

  if (!isLoginCheckDone || isLoggedIn) return null;

  return (
    <>
      <Box as="main" w={400} mx="auto" mt="20">
        <Heading as='h1' size='xl'>
          ログイン
        </Heading>
        <HStack spacing="4" mt={10}>
          <Input
            placeholder="ユーザー名"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            w={40}
          />
          <div>
            <Button onClick={login} colorScheme='blue'>ログイン</Button>
          </div>
        </HStack>
      </Box>
    </>
  );
};
