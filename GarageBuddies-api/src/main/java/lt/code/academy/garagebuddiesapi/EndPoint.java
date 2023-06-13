package lt.code.academy.garagebuddiesapi;

public interface EndPoint {

    String userId = "userId";
    String garageId = "garageId";

    String USERS ="/users";
    String USER = "/{" + userId + "}";

    String ADD_CAR = "/{" + userId + "}/addCar";

    String ADD_RESERVATION = "/{" + userId + "}/addReservation";

    String GARAGES = "/garages";

    String GARAGE = "/{" + garageId + "}";

    String LOGIN = "/login";

}
