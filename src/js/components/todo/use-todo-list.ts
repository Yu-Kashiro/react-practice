import { useEffect, useState } from "react";
import { Todo } from "./type";

export const useTodoList = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
      const todoListData = localStorage.getItem("todo-List");
      if (todoListData) {
      setTodoList(JSON.parse(todoListData));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("todo-List", JSON.stringify(todoList));
    },[todoList]);

    return { todoList, setTodoList };
};