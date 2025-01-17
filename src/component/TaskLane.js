import React from "react";
import TaskCard from "./TaskCard";

const TaskLane = ({ status, tasks, onDelete, onMove, onEdit }) => {
  return ( 
    <div className="w-full md:w-1/4 bg-blue-200 p-4 rounded shadow-md border-spacing-8">
  <h2 className="text-xl font-bold text-gray-700 mb-4">{status}</h2>
  <div className="space-y-4">
    {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onDelete={onDelete}
        onMove={onMove}
        onEdit={onEdit}
      />
    ))}
  </div>
</div>

  );
};

export default TaskLane;
