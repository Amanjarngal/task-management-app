import React from "react";

const TaskCard = ({ task, onDelete, onMove, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-2">
      <h3 className="font-bold text-lg text-blue-600">{task.title}</h3>
      <p className="text-gray900">{task.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
        {task.status !== "To-Do" && (
          <button
            onClick={() => onMove(task.id, "To-Do")}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            To-Do
          </button>
        )}
        {task.status !== "In Progress" && (
          <button
            onClick={() => onMove(task.id, "In Progress")}
            className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            In Progress
          </button>
        )}
        {task.status !== "Completed" && (
          <button
            onClick={() => onMove(task.id, "Completed")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
