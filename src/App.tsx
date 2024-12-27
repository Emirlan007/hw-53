import "./App.css";
import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task.tsx";

interface Task {
  id: string;
  text: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Задача 1" },
    { id: "2", text: "Задача 2" },
    { id: "3", text: "Задача 3" },
  ]);

  const handleAddTask = (taskText: string) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>ToDo</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <ol className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            onDelete={handleDeleteTask}
          />
        ))}
      </ol>
    </div>
  );
};

export default App;
