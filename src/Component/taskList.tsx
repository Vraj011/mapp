import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { deleteTask, fetchTasks, updateTaskStatus } from "@/redux/slices/taskSlice"
import type { Task } from "@/types/task"
import { useEffect } from "react"
import AddTaskForm from "./addTask"

const TaskList = () => {

    const dispatch = useAppDispatch()
    const { items: tasks } = useAppSelector((state) => state.tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    const handleComplete = (id: string) => {
        dispatch(updateTaskStatus({ id, status: 'completed' }));
    };

    const handleDelete = (id: string) => {
        if (!confirm('Delete this task?')) return;
        dispatch(deleteTask({ id }));
    };

    return (
        <>
            <div>
                <h2 className="text-xl font-bold mb-2">Tasks</h2>
                <ul className="space-y-2">
                    {tasks.map((t: Task) => (
                        <li key={t.id} className="border rounded px-3 py-2 flex items-center justify-between">
                            <div>
                                <div className="font-semibold">{t.task}</div>
                                <div className="text-xs text-gray-500">
                                    Status: {t.status} • Created: {new Date(t.created_at).toLocaleString()}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {t.status !== 'completed' && (
                                    <button
                                        onClick={() => handleComplete(t.id)}
                                        className="px-2 py-1 rounded bg-green-600 text-white"
                                    >
                                        Complete
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(t.id)}
                                    className="px-2 py-1 rounded bg-red-600 text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <AddTaskForm />
        </>
    )
}

export default TaskList