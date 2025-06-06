import { useEffect, useState } from 'react';
import { getTasks } from '../services/task.service';

function TaskMetrics() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await getTasks();
        setAllTasks(data);
      } catch (error) {
        console.error('Error al cargar estadísticas:', error.message);
      }
    };
    fetchAll();
  }, []);

  const countByStatus = (status) =>
    allTasks.filter((task) => task.status === status).length;

  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-md font-semibold text-gray-800 mb-4">Estadísticas</h2>

      <div className="flex flex-col items-center space-y-2 text-sm">
        <div className="text-blue-600 font-semibold">{countByStatus('PENDIENTE')}</div>
        <div className="text-gray-700">Pendientes</div>

        <div className="text-yellow-600 font-semibold mt-2">{countByStatus('ENPROGRESO')}</div>
        <div className="text-gray-700">En Progreso</div>

        <div className="text-green-600 font-semibold mt-2">{countByStatus('COMPLETADA')}</div>
        <div className="text-gray-700">Completadas</div>
      </div>
    </div>
  );
}

export default TaskMetrics;
