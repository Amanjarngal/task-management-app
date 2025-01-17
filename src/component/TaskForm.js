import React, { useState, useEffect } from "react";

const TaskForm = ({ onSaveTask, onUpdateTask, editingTask }) => {
  const [task, setTask] = useState({ title: "", description: "", status: "To-Do" });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      onUpdateTask(task);
    } else {
      onSaveTask(task);
    }
    setTask({ title: "", description: "", status: "To-Do" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-500 p-6 rounded shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-black-700 mb-4">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        className="w-full p-3 mb-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        className="w-full p-3 mb-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        className="w-full p-3 mb-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>To-Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded hover:bg-blue-700 transition"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
