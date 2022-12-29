import { useState } from "react";

type props = {
  initialItems: string[];
};

function List({ initialItems }: props) {
  const [list, setList] = useState(initialItems);
  const [newItem, setNewItem] = useState<string>("");
  function addToList() {
    setList((prev) => [...prev, newItem]);
  }

  function removeFromList(listItem: string) {
    setList((prev) => prev.filter((itens) => itens != listItem));
  }
  return (
    <div>
      <div>
        <input
          aria-label="add-name"
          type="text"
          id="testInput"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />

        <button onClick={addToList}>Adicionar</button>
      </div>

      <ul>
        {list.map((listItem, index) => (
          <li key={index}>
            {listItem}
            <button onClick={() => removeFromList(listItem)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
