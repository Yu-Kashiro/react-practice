import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useTodoList } from "./components/todo/use-todo-list";

export const App = () => {
  const { todoList, setTodoList } = useTodoList();

  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1" classname='mb-10'>TODO</Heading>
      <Heading level="h2" classname="mb-8">新規TODO作成</Heading>
      <div className="mb-8">
        <NewTodoForm setTodoList={setTodoList}/>
      </div>
      <div className="mb-8">
        <Heading level="h2">TODO一覧</Heading>
      </div>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </main>
  );
};
export { Todo };
