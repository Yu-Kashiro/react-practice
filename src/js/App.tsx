import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { useState } from "react";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1" classname='mb-10'>TODO</Heading>
      <Heading level="h2" classname="mb-8">新規TODO作成</Heading>
      <NewTodoForm setTodoList={setTodoList}/>
      <Heading level="h2">TODO一覧</Heading>
      <TodoList todoList={todoList}/>
    </main>
  );
};
export { Todo };

