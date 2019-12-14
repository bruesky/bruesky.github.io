package edu.miu.server.controller;

import edu.miu.server.entity.User;
import edu.miu.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/user/add")
    public ResponseEntity<User> add(@RequestBody User user){
        return new ResponseEntity<User>(userService.add(user), HttpStatus.OK);
    }

    @GetMapping("/users")
    public List<User> getAll(){
        return userService.getAll();
    }
}
