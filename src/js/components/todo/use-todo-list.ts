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

    const addTodo = (newTask: string, newPerson:string, newDeadline: string) => {
      setTodoList((prev) => [
        ...prev,
        { id: Date.now(), task: newTask, person: newPerson, deadline: newDeadline },
      ]);
    };

  const deleteTodo = (id: number) =>{
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  };

    return { todoList, addTodo, deleteTodo };
};