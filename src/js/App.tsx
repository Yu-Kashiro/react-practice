import * as React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";
import { useState } from "react";
import { TextField } from "./components/TextField";

export const App = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");
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
      <p>{newTask}</p>
      <p>{newPerson}</p>
      <p>{newDeadline}</p>
      <TodoList />
    </main>
  );
};
