import * as React from "react";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todo-list";
import { Button } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/typography";
import { Input } from "@chakra-ui/react/input";

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
        <Input
          placeholder="タスク名"
          value={filterWord}
          onChange={(e) => setFilterWord(e.target.value)}
        />
      </div>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </main>
  );
};
