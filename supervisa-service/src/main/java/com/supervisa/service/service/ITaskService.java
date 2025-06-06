package com.supervisa.service.service;

import com.supervisa.service.enums.Priority;
import com.supervisa.service.enums.Status;
import com.supervisa.service.model.Task;

import java.util.List;

public interface ITaskService {
    List<Task> getTasks(Status status, Priority priority);
    Task createTask(Task task);
    Task updateTask(Task task);
    void deleteTask(String task_id);
}
