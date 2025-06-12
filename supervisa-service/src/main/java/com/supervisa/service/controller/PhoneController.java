package com.supervisa.service.controller;

import com.supervisa.service.model.Phone;
import com.supervisa.service.service.IPhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/phones")
public class PhoneController {

    @Autowired
    private IPhoneService phoneService;

    @GetMapping
    public ResponseEntity<List<Phone>> getAllPhones(){
        List<Phone> phones = phoneService.getAllPhone();
        return ResponseEntity.status(HttpStatus.OK).body(phones);
    }
}
