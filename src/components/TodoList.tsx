import Item from './Item';
import { Task } from '../types';

type TodoListProps = {
  todos: Task[];
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
};

function TodoList({ todos, removeTask, toggleTask }: TodoListProps) {
  return (
    <div className="mb-4">
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-50 shadow rounded-lg transition-all hover:bg-gray-100"
          >
            <Item todo={todo} removeTask={removeTask} toggleTask={toggleTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
