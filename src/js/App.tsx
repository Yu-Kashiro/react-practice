import * as React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";
import { useState } from "react";
import { TextField } from "./components/TextField";

export type Todo = {
  id: number;
  task: string;
  person: string;
  deadline: string;
};

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addNewTodo = () => {
    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), task: newTask, person: newPerson, deadline: newDeadline },
    ]);
    setNewTask("")
    setNewPerson("")
    setNewDeadline("")
  };

  return (
    <main className="text-center mx-auto w-4/5">
      <Heading level="h1">TODO</Heading>
      <TextField
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      />
      <TextField
        label="担当者"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      />
      <TextField
        label="期限"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      <button className="border" onClick={addNewTodo}>
        追加
      </button>
      <TodoList todoList={todoList}/>
    </main>
  );
};
