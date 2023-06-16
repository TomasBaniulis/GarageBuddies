package lt.code.academy.garagebuddiesapi;

public interface EndPoint {

    String userId = "userId";
    String garageId = "garageId";

    String USERS ="/users";
    String USER = "/{" + userId + "}";

    String UPDATE_USER ="/{ + userId +}";

    String ADD_CAR = "/{" + userId + "}/addCar";

    String ADD_FAVOURITE_GARAGE = "/{" + userId +"}/addGarage";

    String REMOVE_FAVOURITE_GARAGE ="/{" + userId + "}/unfriendGarage";

    String EVALUATE_GARAGE ="/{" + userId + "}/evaluateGarage";

    String ADD_RESERVATION = "/{" + userId + "}/addReservation";

    String GARAGES = "/garages";

    String GARAGE = "/{" + garageId + "}";

    String LOGIN = "/login";

}
