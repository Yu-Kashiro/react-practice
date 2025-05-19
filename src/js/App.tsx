import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useTodoList } from "./components/todo/use-todo-list";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { TextField } from "./components/parts/TextField";
import { Button } from "./components/parts/Button";
import { useAuth } from "./contexts/use-auth";

export const App = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { isLoggedIn, login, logout, userName, setUserName } = useAuth();

  if (!isLoggedIn)
    return (
      <main className="text-center mx-auto w-4/5">
        <Heading level="h1" classname="mb-10">ログイン</Heading>
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
    );




  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1" classname="mb-10">
        TODO
      </Heading>
      <div>{userName}</div>
      <div>
        <Button onClick={logout}>ログアウト</Button>
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
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </main>
  );
};
export { Todo };
