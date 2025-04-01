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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        To-Do List
      </h1>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
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
