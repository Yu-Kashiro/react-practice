import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todo-list";
import { TextField } from "../components/parts/TextField";
import { Button } from "@chakra-ui/react/button";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  const { logout, userName } = useAuth();
  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1" classname="mb-10">
        TODO
      </Heading>
      <div>{userName}</div>
      <div>
        <Button onClick={logout} colorScheme='red' size='sm'>ログアウト</Button>
      </div>
      <Heading level="h2" classname="mb-8">
        新規TODO作成
      </Heading>
      <div className="mb-8">
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div className="mb-8">
        <Heading level="h2">TODO一覧</Heading>
      </div>
      <div className="mb-8">
        <TextField
          id={"filter-word"}
          label={"絞り込み"}
          type="text"
          value={filterWord}
          onChange={setFilterWord}
        />
      </div>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </main>
  );
};
