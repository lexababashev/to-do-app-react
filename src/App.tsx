import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {

  const initialTasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: true },
    { id: 5, title: 'Task 5', completed: false },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">To-Do List</h1>
      <TodoList />
      <Form />
    </div>
  );
}

export default App;
