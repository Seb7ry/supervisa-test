package com.supervisa.service.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "phones")
public class Phone {

    @Id
    private String id;

    @Indexed(unique = true)
    @NotNull(message = "El nombre del teléfono no puede ser nulo.")
    private String name;

    private Map<String, String> data;
}
