import HTTP from "./index";

const saveGarage = (garage) => HTTP.post("/garages", garage);
const getGarages = () => HTTP.get("/garages");
const showGarageDetails = (garageId) => HTTP.get(`/garages/${garageId}`);

export {
    saveGarage, getGarages,showGarageDetails
}