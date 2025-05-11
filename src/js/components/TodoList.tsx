import * as React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 1, task: "souzi", person: "tanaka", deadline: "asitamade" },
    { id: 2, task: "senntaku", person: "tanaka", deadline: "asattemade" },
    { id: 3, task: "kaimono", person: "asano", deadline: "raigetumade" },
  ];

  return (
    <ul className="mt-4 ml-4 bg-indigo-500 p-4 rounded">
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} person={todo.person} deadline={todo.deadline} />
      ))}
    </ul>
  );
};
