import { useEffect, useState } from 'react';

function TaskModal({ isOpen, onClose, onSave, taskToEdit }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        due_date: '',
        priority: 'MEDIA',
        status: 'PENDIENTE',
    });

    useEffect(() => {
        if (taskToEdit) {
            let due_date = taskToEdit.due_date || '';
            if (due_date.includes('/')) {
                const [day, month, year] = due_date.split('/');
                due_date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            }

            setForm({
                title: taskToEdit.title || '',
                description: taskToEdit.description || '',
                due_date,
                priority: taskToEdit.priority || 'MEDIA',
                status: taskToEdit.status || 'PENDIENTE',
            });
        } else {
            setForm({
                title: '',
                description: '',
                due_date: '',
                priority: 'MEDIA',
                status: 'PENDIENTE',
            });
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const due_date = form.due_date
            ? form.due_date.split('-').reverse().join('/')
            : null;

        onSave({
            ...form,
            due_date,
            task_id: taskToEdit?.task_id || undefined,
        });
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 px-4">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    {taskToEdit ? 'Editar Tarea' : 'Nueva Tarea'}
                </h2>

                <div>
                    <label className="block text-sm font-medium mb-1">Título*</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 text-sm"
                        maxLength={150}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Descripción</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 text-sm resize-none"
                        rows={3}
                        maxLength={1000}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Fecha límite</label>
                    <input
                        type="date"
                        name="due_date"
                        value={form.due_date}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Prioridad*</label>
                        <select
                            name="priority"
                            value={form.priority}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 text-sm"
                        >
                            <option value="BAJA">Baja</option>
                            <option value="MEDIA">Media</option>
                            <option value="ALTA">Alta</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Estado*</label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 text-sm"
                        >
                            <option value="PENDIENTE">Pendiente</option>
                            <option value="ENPROGRESO">En progreso</option>
                            <option value="COMPLETADA">Completada</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        {taskToEdit ? 'Actualizar' : 'Guardar'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;
