import { useState } from "react";

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    await onCreate(title);
    setTitle("");
    setError("");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Add Task</h2>

      <div className="form-row">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter task title"
        />
        <button type="submit">Add</button>
      </div>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TaskForm;
