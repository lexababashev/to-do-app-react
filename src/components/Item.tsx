import DeleteIcon from '../assets/delete-button-svgrepo-com.svg';
import { Task } from '../types';

type ItemProps = {
  todo: Task;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
};

function Item({ todo, removeTask, toggleTask }: ItemProps) {
  return (
    <div className="flex items-center w-full">
      <label className="inline-flex items-center mr-3 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTask(todo.id)}
          className="sr-only peer"
        />
        <div className="w-5 h-5 bg-gray-500 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 border-2 border-gray-400 transition-all flex items-center justify-center">
          {todo.completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>

      <span
        className={`flex-1 text-lg transition-colors ${
          todo.completed
            ? 'line-through text-gray-400'
            : 'text-gray-200 group-hover:text-white'
        }`}
      >
        {todo.title}
      </span>

      <button
        className="p-2 bg-red-600 text-white rounded-md transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={() => removeTask(todo.id)}
      >
        <img src={DeleteIcon} alt="Remove" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Item;
