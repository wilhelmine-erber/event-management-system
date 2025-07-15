package com.example.eventmanagement.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class EventRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    private LocalDateTime registrationDate;

    // Getter & Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

public void setUser(User user) {
    this.user = user;
}

public Event getEvent() {
    return event;
}

public void setEvent(Event event) {
    this.event = event;
}

public LocalDateTime getRegistrationDate() {
    return registrationDate;
}

public void setRegistrationDate(LocalDateTime registrationDate) {
    this.registrationDate = registrationDate;
}

}
