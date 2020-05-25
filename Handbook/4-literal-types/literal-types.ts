// Literal Narrowing
// We're making a guarantee that this variable
// helloWorld will never change, by using const.

// So, TypeScript sets the type to be "Hello World" not string
const helloWorld = "Hello World";

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";


// String Literal Types
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // It's possible that someone could reach this
      // by ignoring your types though.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy");

function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
  // ... code goes here ...
  return null;
}


// Numeric Literal Types
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();
console.log(result);

interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}

function setupMap(config: MapConfig) {
}
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
