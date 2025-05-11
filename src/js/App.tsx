import * as React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";

export const App = () => {
  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1">TODO</Heading>
      <TodoList />
    </main>
  );
};
