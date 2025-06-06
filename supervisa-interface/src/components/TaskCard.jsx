import { FiEdit2, FiTrash2, FiCalendar } from 'react-icons/fi';

function TaskCard({ task }) {
    const { title, description, dueDate, priority, status } = task;

    const priorityColor = {
        BAJA: 'bg-green-100 text-green-800',
        MEDIA: 'bg-yellow-100 text-yellow-800',
        ALTA: 'bg-red-100 text-red-800',
    };

    const statusColor = {
        ABIERTO: 'bg-gray-100 text-gray-800',
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
                    <button className="hover:text-blue-600 transition">
                        <FiEdit2 />
                    </button>
                    <button className="hover:text-red-600 transition">
                        <FiTrash2 />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4">
                {dueDate && (
                    <div className="flex items-center text-sm text-gray-600 gap-1">
                        <FiCalendar className="text-base" />
                        {dueDate}
                    </div>
                )}

                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${priorityColor[priority] || ''}`}>
                    {formatearPrioridad(priority)}
                </span>

                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[status] || ''}`}>
                    {formatearEstado(status)}
                </span>
            </div>
        </div>
    );
}

function formatearEstado(value) {
    const map = {
        PENDIENTE: 'Pendiente',
        ENPROGRESO: 'En progreso',
        COMPLETADA: 'Completada',
    };
    return map[value] || value;
}

function formatearPrioridad(value) {
    const map = {
        BAJA: 'Baja',
        MEDIA: 'Media',
        ALTA: 'Alta',
    };
    return map[value] || value;
}

export default TaskCard;
