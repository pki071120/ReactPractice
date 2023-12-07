import React, { useState } from "react";

let nextID = 0;

function List() {
  const [newName, setNewName] = useState("");
  const [personList, setPersonList] = useState([]);
  const addPerson = () => {
    setNewName("");
    setPersonList([
      ...personList,
      {
        id: nextID++,
        name: newName,
      },
    ]);
  };
  return (
    <>
      <h1>떠든 사람</h1>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={addPerson}>추가</button>
      <ul>
        {personList.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
