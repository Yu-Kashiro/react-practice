import { useCallback, useEffect, useState } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filterWord, setFilterWord] = useState<string>("")

  useEffect(() => {
    const todoListData = localStorage.getItem("todo-List");
    if (todoListData) {
      setTodoList(JSON.parse(todoListData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-List", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (newTask: string, newPerson: string, newDeadline: string) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);
  };

  const deleteTodo = useCallback((id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  },[]);

  const filteredTodoList = todoList.filter(
    (todo) => todo.task.includes(filterWord) || todo.person.includes(filterWord),
  );

  return { todoList: filteredTodoList, addTodo, deleteTodo, filterWord, setFilterWord };
};
