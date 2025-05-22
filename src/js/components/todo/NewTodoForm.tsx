import * as React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react/button";
import { Input } from "@chakra-ui/react/input";
import { HStack } from "@chakra-ui/react";

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void;
};

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline);

    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <HStack spacing="4">
      <Input
        placeholder="タスク名"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Input
        placeholder="担当者"
        value={newPerson}
        onChange={(e) => setNewPerson(e.target.value)}
      />
      <Input
        placeholder="期限"
        value={newDeadline}
        type="date"
        onChange={(e) => setNewDeadline(e.target.value)}
      />
      <Button onClick={addNewTodo} colorScheme="blue">
        追加
      </Button>
    </HStack>
  );
};
