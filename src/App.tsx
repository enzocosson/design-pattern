import React, { useState } from 'react';
import './App.css'; 

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ title: string; description: string; isCompleted: boolean }[]>([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (title.trim() === '' || description.trim() === '') {
      alert('Le titre et la description sont obligatoires !');
      return;
    }

    const newTask = { title, description, isCompleted: false };

    alert(`La tâche suivante aurait été ajoutée :\nTitre: ${title}\nDescription: ${description}`);

    setTasks([...tasks, newTask]);

    setTitle('');
    setDescription('');
  };

  const markTaskAsCompleted = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);

    const task = tasks[index];
    if (task.isCompleted) {
      alert(`La tâche "${task.title}" a été réactivée !`);
    } else {
      alert(`La tâche "${task.title}" a été marquée comme terminée !`);
    }
  };

  const deleteTask = (index: number) => {
    const task = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    alert(`La tâche "${task.title}" a été supprimée !`);
  };

  return (
    <div className="task-manager">
      <h1>Gestionnaire de tâches</h1>
      
      <form onSubmit={addTask} className="task-form">
        <div className="form-field">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entrez un titre"
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Entrez une description"
          />
        </div>

        <button type="submit" className="submit-btn">Ajouter la tâche</button>
      </form>

      <div className="task-list">
        <h3>Tâches :</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
              <div className="task-info">
                <strong>{task.title}</strong>: {task.description}
              </div>

              <div className="task-actions">
                <button
                  className="complete-btn"
                  onClick={() => markTaskAsCompleted(index)}
                >
                  {task.isCompleted ? 'Réactiver' : 'Compléter'}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
