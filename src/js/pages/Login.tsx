import * as React from "react";
import { useAuth } from "../hooks/use-auth";
import { Button } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/typography";
import { Input } from "@chakra-ui/react/input";

export const Login = () => {
  const { login, userName, setUserName } = useAuth();
  return (
    <>
      <main className="text-center mx-auto w-4/5">
        <Heading as='h2' size='2xl'>
          ログイン
        </Heading>
        <div className="flex gap-2">
          <Input
            placeholder="ユーザー名"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div>
            <Button onClick={login} colorScheme='blue'>ログイン</Button>
          </div>
        </div>
      </main>
    </>
  );
};
