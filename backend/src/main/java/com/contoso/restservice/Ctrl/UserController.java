package com.contoso.restservice.Ctrl;


import com.contoso.restservice.Model.Status;
import com.contoso.restservice.Model.User;
import com.contoso.restservice.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/users/register")
    public Status registerUser(@Valid @RequestBody User newUser) {
        return userService.registerUser(newUser);
    }

    @PostMapping("/users/login")
    public Status loginUser(@Valid @RequestBody User user) {
        return userService.loginUser(user);
    }

    @PostMapping("/users/logout")
    public Status logUserOut(@Valid @RequestBody User user) {
        return userService.logUserOut(user);
    }

    @DeleteMapping("/users/delete/all")
    public Status deleteUsers() {
        return userService.deleteUsers();
    }

    @GetMapping("/users/all")
    public List<User> registerUser() {
        return userService.getAllUser();
    }
}