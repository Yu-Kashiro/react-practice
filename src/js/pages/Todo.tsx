import * as React from "react";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todo-list";
import { Button } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/typography";
import { Input } from "@chakra-ui/react/input";
import { Avatar, Box, HStack } from "@chakra-ui/react";
import { TodoTable } from "../components/todo/TodoTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  const { isLoggedIn, logout, userName } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Box as="main" w="720px" mx="auto" mt="20">
      <HStack as="header" justifyContent="space-between" spacing='4'>
        <Heading as='h2' size='2xl'>
          TODO
        </Heading>
        <HStack justifyContent="end" spacing='4'>
          <HStack spacing='2'>
            <Avatar size='sm'/>
            <Box>{userName}</Box>
          </HStack>
          <Box>
            <Button onClick={logout} colorScheme='red' size='sm' p='5'>ログアウト</Button>
          </Box>
        </HStack>
      </HStack>
      <Box as="section">
        <Heading as='h2' size='2xl' mt='20'>
          新規TODO作成
        </Heading>
        <Box mt='20'>
          <NewTodoForm addTodo={addTodo} />
        </Box>
      </Box>
      <Box as="section">
        <Box mt='10'>
          <Heading as='h2' size='2xl'>TODO一覧</Heading>
        </Box>
        <Box mt='10'>
          <Input
            placeholder="タスク名"
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
          />
        </Box>
      <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
      </Box>
    </Box>
  );
};
