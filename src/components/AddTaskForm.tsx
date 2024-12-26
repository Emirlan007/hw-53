import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={taskText}
      onChange={(e) => setTaskText(e.target.value)}
      placeholder="Add task"
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTaskForm;