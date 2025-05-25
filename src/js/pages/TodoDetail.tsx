import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useTodoList } from "../hooks/use-todo-list";
import { Layout } from "../components/layouts/Layout";

export const TodoDetail = () => {

  let { id } = useParams();
  const { todoList } = useTodoList();
  const todo = todoList.find(todo => todo.id === id);

  return (
    <Layout title="Todo詳細">
      <Box mt='20' as="section">
        <Box>ID: {todo?.id}</Box>
        <Box>タスク:{todo?.task}</Box>
        <Box>担当者:{todo?.person}</Box>
        <Box>締め切り:{todo?.deadline}</Box>
      </Box>
    </Layout>
  )
};