package com.contoso.restservice.Repository;

import com.contoso.restservice.Model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

//mock db operations
@Repository
public class UserRepository {

    private List<User> users;

    UserRepository() {
        users = new ArrayList<User>();
        users.add(new User("test", "test"));
    }

    public List<User> findAll() {
        return users;
    }

    public void save(User newUser) {
        users.add(newUser);
    }

    public void deleteAll() {
        users.clear();
    }
}
