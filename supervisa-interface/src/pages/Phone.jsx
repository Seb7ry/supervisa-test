import { useEffect, useState } from 'react';
import { getPhones } from '../services/phone.service';
import AlertMessage from '../components/AlertMessage';
import PhoneCard from '../components/PhoneCard';

function Phone() {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const loadPhones = async () => {
        try {
            setLoading(true); 
            const data = await getPhones();
            setPhones(data);
        } catch (error) {
            console.error('Error al cargar los teléfonos:', error.message);
            setErrorMessage(error.message || 'Error al cargar los teléfonos.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPhones();
    }, []);

    return (
        <div className="p-4 sm:p-6 md:p-10">
            {errorMessage && (
                <AlertMessage message={errorMessage} onClose={() => setErrorMessage('')} />
            )}

            <div className="bg-white rounded-xl shadow-md border p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                        Teléfonos Disponibles
                    </h1>
                    <p className="text-sm md:text-base text-gray-600">
                        Dispositivos traidos desde el API.
                    </p>
                </div>
            </div>

            <div className="mt-6">
                {loading ? (
                    <p className="text-center text-sm text-gray-500">Cargando teléfonos...</p>
                ) : phones.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">No hay teléfonos para mostrar.</p>
                ) : (
                    phones.map((phone) => (
                        <PhoneCard
                            key={phone.id}
                            phone={phone}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Phone;