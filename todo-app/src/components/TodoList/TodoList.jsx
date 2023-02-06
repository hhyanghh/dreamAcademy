import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "장보기", status: "active" },
    { id: "2", text: "공부보기", status: "active" },
  ]);
  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이트
    console.log(todo);
    setTodos([...todos, todo]);
  };
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
