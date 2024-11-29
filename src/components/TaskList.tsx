import React from 'react';
import { Task } from '../patterns/TaskFactory'; 
import './TaskManager.scss';

interface TaskListProps {
    tasks: Task[];
    deleteTask: (task: Task) => void;
    markTaskAsCompleted: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, markTaskAsCompleted }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`task-list__item ${task.isCompleted ? 'task-list__item--completed' : ''}`}
                >
                    <div className="task-list__item__title">{task.title}</div>
                    <div className="task-list__item__description">{task.description}</div>
                    <div className="task-list__item__actions">
                        <button
                            className="task-list__item__actions__button task-list__item__actions__button--complete"
                            onClick={() => markTaskAsCompleted(task)}
                        >
                            {task.isCompleted ? 'Réactiver' : 'Compléter'}
                        </button>
                        <button
                            className="task-list__item__actions__button"
                            onClick={() => deleteTask(task)}
                        >
                            Supprimer
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
