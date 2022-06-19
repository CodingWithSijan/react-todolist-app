import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="flex flex-row justify-start mb-4">
        <button
          className="mx-10 w-10 h-10 rounded-full bg-red-800 text-white"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
