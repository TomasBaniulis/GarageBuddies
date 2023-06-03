package lt.code.academy.garagebuddiesapi.user.repository;

import lt.code.academy.garagebuddiesapi.user.document.UserDocument;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserDocument, ObjectId> {


}