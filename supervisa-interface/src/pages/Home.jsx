import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { getTasks } from '../services/task.service';
import TaskCard from '../components/TaskCard';

function Home() {
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks(status, priority);
      setTasks(data);
    } catch (error) {
      console.error('Error al cargar tareas:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [status, priority]); 

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-xl shadow-md border p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            Gestión de Tareas
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Organiza y administra tus tareas de forma eficiente
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all">
          <FiPlusCircle className="text-lg" />
          Nueva Tarea
        </button>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estado
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            <option value="PENDIENTE">Pendiente</option>
            <option value="ENPROGRESO">En progreso</option>
            <option value="COMPLETADA">Completado</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prioridad
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todas</option>
            <option value="ALTA">Alta</option>
            <option value="MEDIA">Media</option>
            <option value="BAJA">Baja</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-center text-sm text-gray-500">Cargando tareas...</p>
        ) : tasks.length === 0 ? (
          <p className="text-center text-sm text-gray-500">No hay tareas para mostrar.</p>
        ) : (
          tasks.map((task) => <TaskCard key={task.task_id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default Home;
