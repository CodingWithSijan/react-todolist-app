import React, { useState } from "react";
import ToDoList from "./ToDoList";

const CompA = () => {
  const [itemList, setItemList] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (event) => {
    setItemList(event.target.value);
  };

  const handleSubmit = () => {
    setList((oldList) => {
      return [...oldList, itemList];
    });
    setItemList("");
  };

  const deleteItem = (id) => {
    setList(
      list.filter((element, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <div className="w-[60vw] h-[60vh] border m-auto shadow-xl mt-7 flex flex-col">
        <div className="mx-auto w-[80%]">
          <div className="title font-mono text-3xl font-bold bg-green-400 p-3 text-center text-white mt-4">
            ToDo List
          </div>
          <div className="inputBox mt-4">
            <input
              className="w-[80%] h-[40px] border-b-2 border-green-400 focus:outline-none text-3xl text-green-500 text-center"
              type="text"
              placeholder="Enter items here..."
              onChange={handleInput}
              value={itemList}
            />
            <button
              className="bg-green-500 p-2 rounded-full h-20 w-20 text-4xl text-white hover:bg-white transition duration-150 hover:ease-in hover:text-green-500 hover:border border-green-500"
              onClick={handleSubmit}
            >
              +
            </button>
          </div>
          <div className="itemList text-center text-3xl font-semibold text-green-500">
            <ol>
              {list.map((element, index) => {
                return (
                  <ToDoList
                    text={element}
                    key={index}
                    id={index}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompA;
