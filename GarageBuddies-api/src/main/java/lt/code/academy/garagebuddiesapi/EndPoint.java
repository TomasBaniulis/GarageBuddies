package lt.code.academy.garagebuddiesapi;

public interface EndPoint {

    String userId = "userId";
    String garageId = "garageId";

    String USERS ="/users";
    String USER = "/{" + userId + "}";

    String GARAGES = "/garages";

    String GARAGE = "/{" + garageId + "}";

    String LOGIN = "/login";

}
