const API_URL = 'http://localhost:8080/phones';

export const getPhones = async () => {
    const res = await fetch(API_URL,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );

    if(!res.ok) {
        const error = await res.json();
        throw new Error(error.message) || 'Error al obtener los teléfonos (API).'
    }
    return res.json();
}