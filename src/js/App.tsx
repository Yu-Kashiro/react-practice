import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useTodoList } from "./components/todo/use-todo-list";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

export const App = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1" classname='mb-10'>TODO</Heading>
      <div>{isLoggedIn ? "ログイン中" : "ログアウト中"}</div>
      <Heading level="h2" classname="mb-8">新規TODO作成</Heading>
      <div className="mb-8">
        <NewTodoForm addTodo={addTodo}/>
      </div>
      <div className="mb-8">
        <Heading level="h2">TODO一覧</Heading>
      </div>
      <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
    </main>
  );
};
export { Todo };
