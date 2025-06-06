import { FiPlusCircle } from 'react-icons/fi';

function Home() {
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
    </div>
  );
}

export default Home;
