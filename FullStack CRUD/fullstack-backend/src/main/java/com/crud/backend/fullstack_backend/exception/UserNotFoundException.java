package com.crud.backend.fullstack_backend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could Not find User with Id: "+id);
    }
}
