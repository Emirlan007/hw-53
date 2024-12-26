import React from "react";

interface TaskProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, onDelete }) => {
  return (
    <div className="items">
      <li className="item">
        {text}
      </li>
      <button className="btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Task;