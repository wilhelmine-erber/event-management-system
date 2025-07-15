# Theoretische Fragen

## Database & Backend
1. Ich habe mit Hilfe von chatGPT erfahren, dass man einen normalen controller in Java 
    verwendet wenn man HTML-Seiten zurückgeben will, während ein RestController eine 
    Kombination aus einem controller und einem RestBody ist, diesen verwendet man wenn 
    man nur Daten für zb eine REST API zurückgeben will (JSON, also für ein Backend das 
    mit react redet, also wäre dieser RestController für das Event-Management-system gut)
2. Da CORS auch für React und Express eine wichtige Sicherheitsrichtlinie des Browsers ist,
    muss man auch hier regeln ob ein Browser Anfragen vom Frontend an das Backend auf andere 
    Domains zulässt, dies macht man mit einer extra Konfigurationsklasse (hier gibt man die 
    url aus dem Frontend an die 'erlaubt ist')

## Frontend & React
1. Class components habe ich am Anfang mal genutzt und diese haben bestimmte Methoden, 
    die zu den verschiedenen Zeitpunkten des DOM-Aufbaus laufen (mounting, updating, unmounting),
    Function components, sind die components die jetzt nur noch verwendet werden, also moderner, 
    da sie viele Hooks, also vorgefertigte Funktionen, mitbringen, 
    hier läuft der DOM Aufbau und Update hauptsächlich über 'useEffect' (hier kann man entscheiden 
    wie oft die Component neu gerendert wird)

2. Also sind die Vorteile definitiv in der einfacheren Struktur (kürzerer code, alles ist klarer), 
    Lesbarkeit der function components und auch in der Wiederverwendbarkeit (Hooks sind einfach mehrfach nutzbar)

3. State Management Libaries: bis jetzt habe ich in kleinen Projekten nur 'useContext' genutzt,
    ein bisschen Redux und ein bisschen Zustand habe ich genutzt, das ist jedoch ausbaufähig :)

4. Möglichst wenige state-updates verwenden, alle List-items mit key versehen um eindeutige items zu erzeugen

5. Ich nutze gerne Tailwind.css da ich dort jede CSS Eigenschaft als Klasse hinzufügen kann, 
    dadurch kann ich alles selber entscheiden und bin flexibel, 
    bei Daisy-UI und Material-UI kann man vorgefertigte componenten nutzen, 
    das ist praktisch wenn man schnell ein fertiges, moderne Design braucht und nicht viel 
    anpassen möchte (die Gefahr ist groß, das eine Webseite das selbe Design hat)

## Cross-Platform & Flutter
1. In Flutter wird mit Widgets gerabeitet, was in react eine Komponente ist, ist in Flutter ein Widget. 

2. In Flutter kann man Projekte entwickeln die für jede Plattform angepasst sind, die Designs sind besser 
    anpassbar und schneller beim Laden von Änderungen, Nachteile sind eine neue Programmiersprache: Dart,
    die man erst lernen muss, die App ist meistens größer als mit react und die Comminity ist kleiner.

3. In Flutter gibt es die Möglichkeit mit setState() einfach lokale Daten zu speichern, mit Provider, 
    wie bei react kontextbasiert zu speichern. Mit Riverpod und Bloc / Cubit hat man moderne und 
    sichere Verwaltung auch für größere Apps.
    Für die Event-Management-Challenge würde ich mit Provider arbeiten, da es react-ähnlich arbeitet.

4. Für mich ist eine Herausforderung, das Lernen der Entwicklung von Cross-Platform Apps, das würde 
    ich lösen mit viel Lesen, Ausprobieren und Projekte ertsellen.


## Allgemein
1. Ich würde testen ob die API die richtigen Daten liefert, ob es Fehler gibt wenn User ungültige 
    Eingaben machen und alle Funktionen der App durchklicken. Aßerdem kann man Testdaten nutzen und 
    automatische Test mit Maven oder GitHub Actions machen
2. Beim Login, auf jeden Fall authetifizierung und autorisierung hinzufügen, Passwort mit zb Bcrypt hashen, 
    CORS konfigurieren, user input validieren und Fehlermeldungen nicht ausgeben wenn es interne Fehler 
    sind von der API. Auch Rate Limits schhützen die API-Endpunkte vor Brute Force Attaken. .env-Datein mit 
    Zugangsdaten und Token sind ein guter schutz