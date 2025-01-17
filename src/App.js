import React, { useState } from "react";
import TaskForm from "./component/TaskForm";
import TaskLane from "./component/TaskLane";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Task Management App
      </h1>
      <TaskForm
        onSaveTask={addTask}
        onUpdateTask={updateTask}
        editingTask={editingTask}
      />
      <div className="flex flex-wrap gap-4 mt-8 justify-center ">
        {["To-Do", "In Progress", "Completed"].map((status) => (
          <TaskLane
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
            onDelete={deleteTask}
            onMove={moveTask}
            onEdit={setEditingTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
