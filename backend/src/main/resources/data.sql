-- Benutzer mit Rolle ORGANIZER anlegen
INSERT INTO app_user (id, username, email, role)
VALUES (1, 'max', 'max@example.com', 'ORGANIZER');

INSERT INTO app_user (id, username, email, role)
VALUES (2, 'anna', 'anna@example.com', 'ORGANIZER');

-- Events mit Bezug auf die Organizer (User)
INSERT INTO event (title, description, date, location, max_participants, organizer_id)
VALUES ('Tech Night', 'Vorträge & Networking', '2025-08-10', 'Berlin', 100, 1);

INSERT INTO event (title, description, date, location, max_participants, organizer_id)
VALUES ('Code Camp', 'Hands-on Coding für Einsteiger', '2025-09-15', 'Hamburg', 50, 2);
