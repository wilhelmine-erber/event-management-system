package com.example.eventmanagement.controller;

import com.example.eventmanagement.model.Event;
import com.example.eventmanagement.model.EventRegistration;
import com.example.eventmanagement.model.User;
import com.example.eventmanagement.repository.EventRegistrationRepository;
import com.example.eventmanagement.repository.EventRepository;
import com.example.eventmanagement.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/registrations")
public class EventRegistrationController {

    private final EventRegistrationRepository registrationRepository;
    private final UserRepository userRepository;
    private final EventRepository eventRepository;

    public EventRegistrationController(EventRegistrationRepository registrationRepository,
                                       UserRepository userRepository,
                                       EventRepository eventRepository) {
        this.registrationRepository = registrationRepository;
        this.userRepository = userRepository;
        this.eventRepository = eventRepository;
    }

    @PostMapping
    public EventRegistration registerUserToEvent(@RequestBody EventRegistration registration) {
        User user = userRepository.findById(registration.getUser().getId()).orElseThrow();
        Event event = eventRepository.findById(registration.getEvent().getId()).orElseThrow();

        registration.setUser(user);
        registration.setEvent(event);
        registration.setRegistrationDate(LocalDateTime.now());

        return registrationRepository.save(registration);
    }

    @GetMapping
    public List<EventRegistration> getAllRegistrations() {
        return registrationRepository.findAll();
    }
}
