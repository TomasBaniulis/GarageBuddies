package lt.code.academy.garagebuddiesapi.user.repository;
import lt.code.academy.garagebuddiesapi.user.document.UserDocument;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserDocument, ObjectId> {
    Optional<UserDocument> findByUsername (String username);
}