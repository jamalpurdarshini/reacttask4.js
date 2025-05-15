import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-2">
      <span className={todo.completed ? "line-through text-gray-500" : ""}>
        {todo.title}
      </span>
      <div className="space-x-2">
        <button onClick={() => onToggle(todo.id)} className="text-blue-500">
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
