// Literal Narrowing
// We're making a guarantee that this variable
// helloWorld will never change, by using const.
// So, TypeScript sets the type to be "Hello World" not string
var helloWorld = "Hello World";
// On the other hand, a let can change, and so the compiler declares it a string
var hiWorld = "Hi World";
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // It's possible that someone could reach this
            // by ignoring your types though.
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// ... more overloads ...
function createElement(tagName) {
    // ... code goes here ...
    return null;
}
// Numeric Literal Types
function rollDice() {
    return (Math.floor(Math.random() * 5) + 1);
}
var result = rollDice();
console.log(result);
function setupMap(config) {
}
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
