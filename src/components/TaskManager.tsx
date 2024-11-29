import React, { useState } from 'react';
import { Subject, AlertNotifier } from '../patterns/NotificationSystem'; 

interface Task {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
}

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const subject = new Subject(); 
    const alertNotifier = new AlertNotifier(); 

    subject.addObserver(alertNotifier);

    const addTask = (title: string, description: string) => {
        const newTask: Task = {
            id: tasks.length + 1,
            title,
            description,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
        subject.notify('Une nouvelle tâche a été ajoutée !');
    };

    const markTaskAsCompleted = (task: Task) => {
        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
        );
        setTasks(updatedTasks);

        if (task.isCompleted) {
            subject.notify('La tâche a été réactivée !'); 
        } else {
            subject.notify('La tâche a été marquée comme terminée !'); 
        }
    };

    const deleteTask = (task: Task) => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        setTasks(updatedTasks);
        subject.notify('La tâche a été supprimée !'); 
    };

    return (
        <div className="task-manager">
            <h1>Gestionnaire de tâches</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = (e.target as any).title.value;
                    const description = (e.target as any).description.value;
                    addTask(title, description);
                    (e.target as any).reset();
                }}
                className="task-form"
            >
                <div className="form-field">
                    <label htmlFor="title">Titre de la tâche</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description de la tâche</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Ajouter la tâche</button>
            </form>

            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
                        <div className="task-info">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div className="task-actions">
                            <button
                                onClick={() => markTaskAsCompleted(task)}
                                className="complete-btn"
                            >
                                {task.isCompleted ? 'Réactiver' : 'Compléter'}
                            </button>
                            <button
                                onClick={() => deleteTask(task)}
                                className="delete-btn"
                            >
                                Supprimer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
