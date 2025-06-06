import { useEffect } from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';

function AlertMessage({ message, onClose }) {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000); 

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[999] w-[90%] sm:w-auto max-w-sm bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg shadow-md flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-sm">
                <FiAlertCircle className="text-lg" />
                <span className="break-words">{message}</span>
            </div>
            <button onClick={onClose} className="text-red-600 hover:text-red-800 transition">
                <FiX className="text-lg" />
            </button>
        </div>
    );
}

export default AlertMessage;
