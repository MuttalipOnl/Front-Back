import { useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSumbit(e) {
    e.preventDefault();
    // console.log(e.target.item_name.value);

    const item = {
      id: Date.now(),
      name: name,
      completed: false,
    };

    onAddItem(item);
    setName("");
  }
  return (
    <form
      className="shopping-form border rounded p-3 mb-3"
      onSubmit={handleFormSumbit}
    >
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Eleman Ekle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
}
