import { FiEdit2, FiTrash2, FiCalendar } from 'react-icons/fi';

function TaskCard({ task, onEdit, onDelete }) {
    const { title, description, due_date, priority, status } = task;

    const priorityColor = {
        BAJA: 'bg-green-100 text-green-800',
        MEDIA: 'bg-yellow-100 text-yellow-800',
        ALTA: 'bg-red-100 text-red-800',
    };

    const statusColor = {
        PENDIENTE: 'bg-gray-100 text-gray-800',
        ENPROGRESO: 'bg-blue-100 text-blue-800',
        COMPLETADA: 'bg-green-100 text-green-800',
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border p-4 mb-4">
            <div className="flex justify-between items-start gap-2">
                <div>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{description}</p>
                </div>
                <div className="flex gap-2 text-gray-500">
                    <button onClick={() => onEdit(task)} className="hover:text-blue-600 transition">
                        <FiEdit2 />
                    </button>
                    <button onClick={() => onDelete(task)} className="hover:text-red-600 transition">
                        <FiTrash2 />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4">
                <div className="flex items-center text-sm text-gray-600 gap-1">
                    <FiCalendar className="text-base" />
                    {isValidDate(due_date) ? formatDate(due_date) : 'Sin fecha'}
                </div>

                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${priorityColor[priority] || ''}`}>
                    {formatValue(priority)}
                </span>

                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[status] || ''}`}>
                    {formatValue(status)}
                </span>
            </div>
        </div>
    );
}

function formatValue(value) {
    const map = {
        ALTA: 'Alta',
        MEDIA: 'Media',
        BAJA: 'Baja',
        PENDIENTE: 'Pendiente',
        ENPROGRESO: 'En progreso',
        COMPLETADA: 'Completada',
    };
    return map[value] || value;
}

function formatDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return '';
    if (dateStr.includes('/')) return dateStr;

    const [year, month, day] = dateStr.split('-');
    if (!year || !month || !day) return '';
    return `${day}/${month}/${year}`;
}

function isValidDate(value) {
    if (!value || typeof value !== 'string') return false;
    if (value.toLowerCase() === 'null') return false;

    const parts = value.includes('/') ? value.split('/') : value.split('-');
    return parts.length === 3 && parts.every((p) => p.trim().length > 0);
}

export default TaskCard;
