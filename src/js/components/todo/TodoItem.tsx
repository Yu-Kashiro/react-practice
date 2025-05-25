import * as React from "react";
import { useAuth } from "../../hooks/use-auth";
import { memo } from "react";
import { Button } from "@chakra-ui/react/button";
import { Td, Tr } from "@chakra-ui/react/table";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: string) => void;
};

export const TodoItem = memo(({ id, task, person, deadline, deleteTodo }: Props) => {
  const { userName } = useAuth();
  return (

    <Tr color={userName === person ? "red" : ""}>
      <Td><Link to={`/todo/${id}`}>{id}</Link></Td>
      <Td>{task}</Td>
      <Td >{person}</Td>
      <Td>{deadline}</Td>
      <Td><Button onClick={() => deleteTodo(id)} size='sm' colorScheme='red'>削除</Button></Td>
    </Tr>

  );
});
