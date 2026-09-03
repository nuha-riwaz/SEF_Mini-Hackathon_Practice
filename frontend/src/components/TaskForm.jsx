import { useState } from "react";

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Title and description are required");
      return;
    }

    await onCreate({ title, description, priority });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setError("");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Add Task</h2>

      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Task title"
      />

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Task description"
        rows="3"
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit">Add Task</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TaskForm;
