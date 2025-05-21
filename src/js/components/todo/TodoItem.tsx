import * as React from "react";
import { useAuth } from "../../hooks/use-auth";
import { memo } from "react";
import { Button } from "@chakra-ui/react/button";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};

export const TodoItem = memo(({ id, task, person, deadline, deleteTodo }: Props) => {
  const { userName } = useAuth();
  const style = userName === person ? "text-red-600 font-bold" : "";
  return (
    <>
      <li className="grid grid-cols-4 p-1 items-center">
        <div>{task}</div>
        <div className={style}>{person}</div>
        <div>{deadline}</div>
        <div>
          <Button onClick={() => deleteTodo(id)} size='sm' colorScheme='red'>削除</Button>
        </div>
      </li>
    </>
  );
});
