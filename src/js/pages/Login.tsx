import * as React from "react";
import { Button } from "../components/parts/Button";
import { Heading } from "../components/parts/Heading";
import { TextField } from "../components/parts/TextField";
import { useAuth } from "../hooks/use-auth";

export const Login = () => {
  const { login, userName, setUserName } = useAuth();
  return (
    <>
      <main className="text-center mx-auto w-4/5">
        <Heading level="h1" classname="mb-10">
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
            <Button onClick={login}>ログイン</Button>
          </div>
        </div>
      </main>
    </>
  );
};
