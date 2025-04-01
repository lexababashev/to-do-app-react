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
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTask(todo.id)}
        className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200 cursor-pointer"
      />

      <span
        className={`flex-1 text-lg ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {todo.title}
      </span>

      <button
        className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full transition-all hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        onClick={() => removeTask(todo.id)}
      >
        <img src={DeleteIcon} alt="Remove" className="w-7 h-7" />
      </button>
    </div>
  );
}

export default Item;
