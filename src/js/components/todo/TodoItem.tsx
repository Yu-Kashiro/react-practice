import * as React from "react";
import { useAuth } from "../../hooks/use-auth";
import { memo } from "react";
import { Button } from "@chakra-ui/react/button";
import { Td, Tr } from "@chakra-ui/react/table";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};

export const TodoItem = memo(({ id, task, person, deadline, deleteTodo }: Props) => {
  const { userName } = useAuth();
  return (

    <Tr color={userName === person ? "red" : ""}>
      <Td>{task}</Td>
      <Td >{person}</Td>
      <Td>{deadline}</Td>
      <Td><Button onClick={() => deleteTodo(id)} size='sm' colorScheme='red'>削除</Button></Td>
    </Tr>

  );
});
