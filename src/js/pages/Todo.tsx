import * as React from "react";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todo-list";
import { TextField } from "../components/parts/TextField";
import { Button } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/typography";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  const { logout, userName } = useAuth();
  return (
    <main className="text-center mx-auto w-4/5">
      <Heading as='h2' size='2xl'>
        TODO
      </Heading>
      <div>{userName}</div>
      <div>
        <Button onClick={logout} colorScheme='red' size='sm'>ログアウト</Button>
      </div>
      <Heading as='h2' size='2xl'>
        新規TODO作成
      </Heading>
      <div className="mb-8">
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div className="mb-8">
        <Heading as='h2' size='2xl'>TODO一覧</Heading>
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
