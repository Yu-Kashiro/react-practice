import * as React from "react";
import { TextField } from "../parts/TextField";
import { useState } from "react";
import { Todo } from "../../App";

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
};

export const NewTodoForm = ({ setTodoList }: Props) => {
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

  return(
    <>
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
    </>
  );
};