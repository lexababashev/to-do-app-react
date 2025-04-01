import { useState } from 'react';

type FormProps = {
  addTask: (title: string) => void;
};

function Form({ addTask }: FormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Enter a task..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
