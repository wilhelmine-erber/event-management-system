# Theoretische Fragen

## Database & Backend
1.
2.

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