const API_URL = 'http://localhost:8080/tasks';

export const getTasks = async (status, priority) => {
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    if (priority) params.append('priority', priority);

    const res = await fetch(`${API_URL}?${params.toString()}`);
    if (!res.ok) throw new Error('Error al obtener las tareas');
    return res.json();
};

export const createTask = async (task) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Error al crear la tarea');
    }
    return res.json();
};

export const updateTask = async (task) => {
    const res = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Error al actualizar la tarea');
    }
    return res.json();
};

export const deleteTask = async (taskId) => {
    const res = await fetch(`${API_URL}/${taskId}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Error al eliminar la tarea');
    }
};