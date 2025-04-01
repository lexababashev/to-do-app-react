import { useState } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import { Task } from './types';

function App() {
  const initTasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];

  const [todos, setTodos] = useState<Task[]>(initTasks);

  const addTask = (title: string) => {
    if (title.trim() === '') {
      alert('Please enter a task');
      return;
    }
    const newTask: Task = {
      id: Math.floor(Math.random() * 9000) + 1000,
      title,
      completed: false,
    };
    setTodos([...todos, newTask]);
  };

  const removeTask = (id: number) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        To-Do List
      </h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <TodoList
          todos={todos}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
        <Form addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
