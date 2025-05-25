import * as React from "react";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { useTodoList } from "../hooks/use-todo-list";
import { Heading } from "@chakra-ui/react/typography";
import { Input } from "@chakra-ui/react/input";
import { Box } from "@chakra-ui/react";
import { TodoTable } from "../components/todo/TodoTable";
import { Layout } from "../components/layouts/Layout";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();

  return (
    <Layout title="Todo">
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
    </Layout>
  );
};
