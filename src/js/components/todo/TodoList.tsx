import * as React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "src/js/App";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: number) => void
};

export const TodoList = ({ todoList, deleteTodo }: Props) => {
  return (
    <ul className="bg-indigo-500 p-4 rounded">
      <li className="grid grid-cols-4 font-bold">
        <div>タスク名</div>
        <div>担当者</div>
        <div>期限</div>
        <div>削除ボタン</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
