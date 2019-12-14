package edu.miu.server.service;

import edu.miu.server.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    public void testAddUser(){
        User user = new User();
        user.setFirstName("Aaaa");
        user.setLastName("Bbbb");
        user.setEmail("ab@gmail.com");
        User user1 = userService.add(user);
        assert(user.getEmail().equals(user1.getEmail()));
    }

}