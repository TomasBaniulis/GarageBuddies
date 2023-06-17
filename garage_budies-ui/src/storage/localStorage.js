const addToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const deleteFromLocalStorage = (key) => localStorage.removeItem(key);

export {
    addToLocalStorage,
    getFromLocalStorage,
    deleteFromLocalStorage
}