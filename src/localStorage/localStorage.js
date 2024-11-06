export const saveLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadLocalStorage = (key) => {
    try {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
        console.error(`Error al cargar ${key} desde localStorage:`, error);
        return [];
    }
};

export const clearLocalStorage = () => {
    localStorage.clear();
};