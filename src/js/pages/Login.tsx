import * as React from "react";
import { TextField } from "../components/parts/TextField";
import { useAuth } from "../hooks/use-auth";
import { Button } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/typography";

export const Login = () => {
  const { login, userName, setUserName } = useAuth();
  return (
    <>
      <main className="text-center mx-auto w-4/5">
        <Heading as='h2' size='2xl'>
          ログイン
        </Heading>
        <div className="flex gap-2">
          <TextField
            id="user-name"
            label="ユーザー名"
            type="text"
            value={userName}
            onChange={setUserName}
          />
          <div>
            <Button onClick={login} colorScheme='blue'>ログイン</Button>
          </div>
        </div>
      </main>
    </>
  );
};
