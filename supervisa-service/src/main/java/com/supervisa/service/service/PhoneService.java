package com.supervisa.service.service;

import com.supervisa.service.model.Phone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class PhoneService implements IPhoneService{

    @Autowired
    private RestTemplate restTemplate;

    @Value("${api.link}")
    private String apiServiceUrl;

    @Override
    public List<Phone> getAllPhone() {
        if(apiServiceUrl == null || apiServiceUrl.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "La URL del api no existe o no está definida.");
        }

        try {
            ResponseEntity<List<Phone>> res = restTemplate.exchange(
                    apiServiceUrl,
                    HttpMethod.GET,
                    null,
                    new ParameterizedTypeReference<List<Phone>>() {}
            );
            List<Phone> phones = res.getBody();
            return phones;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

}
