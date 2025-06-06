package com.supervisa.service.repository;

import com.supervisa.service.enums.Priority;
import com.supervisa.service.enums.Status;
import com.supervisa.service.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    List<Task> getByStatus(Status status);
    List<Task> getByPriority(Priority priority);
    List<Task> getByStatusAndPriority(Status status, Priority priority);
    boolean existsByTitle(String title);
}
