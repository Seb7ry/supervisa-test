package com.supervisa.service.service;

import com.supervisa.service.enums.Priority;
import com.supervisa.service.enums.Status;
import com.supervisa.service.model.Task;
import com.supervisa.service.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class TaskService implements ITaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> getTasks(Status status, Priority priority) {
        if (status != null && priority != null) {
            return taskRepository.getByStatusAndPriority(status, priority);
        } else if (status != null) {
            return taskRepository.getByStatus(status);
        } else if (priority != null) {
            return taskRepository.getByPriority(priority);
        } else {
            return taskRepository.findAll();
        }
    }

    @Override
    public Task createTask(Task task) {
        if(taskRepository.existsByTitle(task.getTitle())){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Ya existe una tarea con ese título."
            );
        }

        try {
            return taskRepository.save(task);
        } catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "No se pudo crear la tarea, error: " + e.getMessage()
            );
        }
    }

    @Override
    public Task updateTask(Task task) {
        if(task.getTask_id() == null || !taskRepository.existsById(task.getTask_id())){
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "No existe una tarea para actualizar."
            );
        }

        try {
            return taskRepository.save(task);
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "No se pudo actualizar la tarea, error: " + e.getMessage()
            );
        }
    }

    @Override
    public void deleteTask(String task_id) {
        if(!taskRepository.existsById(task_id)){
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "No existe una tarea con ese id."
            );
        }

        try {
            taskRepository.deleteById(task_id);
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "No se pudo eliminar la tarea, error: " + e.getMessage()
            );
        }
    }
}
