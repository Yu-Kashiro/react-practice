import * as React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "src/js/App";

type Props ={
  todoList: Todo[];
}

export const TodoList = ({todoList}: Props) => {

  return (
    <ul className="bg-indigo-500 p-4 rounded">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} person={todo.person} deadline={todo.deadline} />
      ))}
    </ul>
  );
};
