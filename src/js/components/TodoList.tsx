import * as React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 1, task: "souzi", deadline: "asitamade" },
    { id: 2, task: "senntaku", deadline: "asattemade" },
  ];

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} task={todo.task} deadline={todo.deadline} />
      ))}
    </ul>
  );
};
