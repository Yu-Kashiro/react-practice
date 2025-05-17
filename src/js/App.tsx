import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(
      "コンポーネントがマウントされた、もしくはtodoListが更新されました。",
    );

    return () => {
      console.log("コンポーネントがアンマウントされました。");
    };
  }, []);

  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1" classname='mb-10'>TODO</Heading>
      <div>
        カウント: {count} <button onClick={() => setCount(count + 1)}>ボタン</button>
      </div>
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
