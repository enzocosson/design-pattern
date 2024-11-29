import React from 'react';
import { Task } from '../patterns/TaskFactory';

interface TaskItemProps {
    task: Task;
    deleteTask: (task: Task) => void;
    markTaskAsCompleted: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, markTaskAsCompleted }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => markTaskAsCompleted(task)}>
                {task.isCompleted ? 'Réactiver' : 'Terminer'}
            </button>
            <button onClick={() => deleteTask(task)}>Supprimer</button>
        </div>
    );
};

export default TaskItem;
