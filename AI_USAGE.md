# documentation usage AI

Prompt: Fehlermeldung beim Installieren und Initialisieren von 'react-router-dom'
Lösung: cache leeren, seite neu starten, da app auf anderem port lief

Prompt: 'Erkläre mir wieso meine 'EventList.jsx' keine evets darstellt, die events werden mit props übergeben, mein code: ###'
Lösung: es ehlten runde Klammern oder ein return, also falsche syntax


Bei der beantwortung der Fragen zu Cross-Platform & Flutter
Prompt: 'Erkläre mir kurz und einfach die Grundlagen zu flutter, Vorteile und Nachteile gegenüber react und das flutter state management'


Da ich leider dahingehen noch keine Erfarung habe:
Prompt: 'Erstelle mir eine Schritt für Schritt Anleitung um ein Backend mit Java spring-boot zu erstellen, dabei soll Spring Web, Spring Data JPA, h2 Database und folgende JPA Entities enthalten sein: User Entity:
●​ id, username, email, role (ORGANIZER/PARTICIPANT)
Event Entity:
●​ id, title, description, date, location, maxParticipants, organizerId
EventRegistration Entity:
●​ id, userId, eventId, registrationDate'


Prompt: 'wo trage ich die CORS konfiguration ein in einen java spring-boot backend?'

Prompt: 'wo kann ich mit der H2 Database in java sprin-boot daten mocken, zeige mir wo ich sie in einem projekt eintrage.'
Ausgabe: stellt testevents zur verfügung damit im frontend zwei Test-events angezeigt werden
```sql
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

```

Bei Fehlermeldungen habe ich auch explizit in chatGPT nachgefragt, da dies mein erstes sprin-boot projekt ist.
Allgemeine Verständnissfragen wie man React-frontend mit Backend in sprin-boot verbinden kann.
