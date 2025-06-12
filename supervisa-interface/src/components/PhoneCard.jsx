import { FiEdit2, FiTrash2, FiCalendar } from 'react-icons/fi';

function PhoneCard({ phone }) {
    const { id, name, data } = phone;

    return (
        <div className="bg-white rounded-xl shadow-sm border p-4 mb-4">
            <div className="flex justify-between items-start gap-2">
                <div>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800">{id}</h3>
                    <p className="text-sm font-semibold italic text-gray-800 mt-1">{name}</p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4">
                <div className="flex text-sm text-gray-600 flex-col gap-2">                    
                    {Object.entries(data || {}).map(([key, value]) => (
                        <p key={key}> {key}: {value}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PhoneCard;
