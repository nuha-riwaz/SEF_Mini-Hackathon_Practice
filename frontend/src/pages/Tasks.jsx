import { useEffect, useState } from "react";
import api from "../services/api.js";
import TaskForm from "../components/TaskForm.jsx";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  const loadTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch {
      setMessage("Could not load tasks. Is the backend running?");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (taskData) => {
    try {
      await api.post("/tasks", taskData);
      setMessage("");
      await loadTasks();
    } catch (error) {
      setMessage(error.response?.data?.message || "Could not create task");
    }
  };

  const toggleTask = async (task) => {
    await api.put(`/tasks/${task._id}`, {
      completed: !task.completed,
    });
    await loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    await loadTasks();
  };

  return (
    <section>
      <TaskForm onCreate={createTask} />

      <div className="card">
        <h2>Tasks</h2>

        {message && <p className="error">{message}</p>}

        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <div className="task-item" key={task._id}>
                <div>
                  <strong className={task.completed ? "completed" : ""}>
                    {task.title}
                  </strong>
                  <p>{task.description}</p>
                  <small>Priority: {task.priority}</small>
                </div>

                <div className="actions">
                  <button onClick={() => toggleTask(task)}>
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                  <button className="danger" onClick={() => deleteTask(task._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Tasks;
