import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createTasks } from '@/redux/slices/taskSlice';
import React, { useState } from 'react';

const AddTaskForm: React.FC = () => {

    const [task, setTask] = useState('');
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.tasks);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!task.trim()) return;
        dispatch(createTasks({ task }));
        setTask('');
    };
    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="New task..."
                className="border rounded px-2 py-1 flex-1"
            />
            <button
                type="submit"
                disabled={loading}
                className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50"
            >
                {loading ? 'Adding...' : 'Add'}
            </button>
        </form>
    );
};

export default AddTaskForm;
