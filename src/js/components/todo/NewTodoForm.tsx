import * as React from "react";
import { TextField } from "../parts/TextField";
import { useState } from "react";
import { Todo } from "../../App";
import { Button } from "../parts/Button";

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void
};

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline);

    setNewTask("")
    setNewPerson("")
    setNewDeadline("")
  };

  return(
    <div className="flex justify-center gap-x-5 items-center">
      <div>
      <TextField
        id="task"
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      />
      </div>
      <div>
      <TextField
        id="person"
        label="担当者"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      />
      </div>
      <div>
      <TextField
        id="deadline"
        label="期限"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      </div>
      <Button onClick={addNewTodo}>追加</Button>
    </div>
  );
};