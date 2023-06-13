import HTTP from "./index";

const getUser = (userId) => HTTP.get(`/users/${userId}`);
const saveUser = (user) => HTTP.post('/users', user);
const updateUser = (user, userId) => HTTP.put(`/users/${userId}, user`);
const deleteUser = (userid) => HTTP.delete(`/users/${userid}`);
const login = (data) => { console.log('login:', data);
    HTTP.post('/login', data)};

const addCarToUserGarage = (data, userId) => HTTP.post(`/users/${userId}/addCar`)

export {
    getUser,
    saveUser,
    updateUser,
    deleteUser,
    login,
    addCarToUserGarage
}