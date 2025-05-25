import { useCallback, useEffect, useState } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filterWord, setFilterWord] = useState<string>("");

  useEffect(() => {
    const todoListData = localStorage.getItem("todo-List");
    if (todoListData) {
      setTodoList(JSON.parse(todoListData));
    }
  }, []);

  const addTodo = (newTask: string, newPerson: string, newDeadline: string) => {
    const updatedTodoList = [
      ...todoList,
      {
        id: Date.now().toString(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ];
    localStorage.setItem("todo-List", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  const deleteTodo = (id: string) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todo-List", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  const filteredTodoList = todoList.filter(
    (todo) =>
      todo.task.includes(filterWord) || todo.person.includes(filterWord),
  );

  return {
    todoList: filteredTodoList,
    addTodo,
    deleteTodo,
    filterWord,
    setFilterWord,
  };
};
