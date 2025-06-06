package com.supervisa.service.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.supervisa.service.enums.Priority;
import com.supervisa.service.enums.Status;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "tasks")
public class Task {

    @Id
    private String task_id;

    @Indexed(unique = true)
    @NotBlank(message = "El título es obligatorio.")
    @Size(max = 150, message = "El título no debe tener más de 150 caracteres.")
    private String title;

    @Size(min = 500, max = 1000, message = "La descripción no debe superar los 1000 caracteres.")
    private String description;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @FutureOrPresent(message = "La fecha debe ser de hoy o futura.")
    private LocalDate due_date;

    @NotNull(message = "La prioridad no puede ser nula/vacía.")
    private Priority priority = Priority.MEDIA;

    @NotNull(message = "El estado no puede ser nulo/vacío.")
    private Status status = Status.PENDIENTE;
}
