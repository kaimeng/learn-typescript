function padLeft(value, padding) {
    // ...
}
padLeft("hello", 4);
padLeft('hello', 'world');
function networkStatus(state) {
    // state.code;
    switch (state.state) {
        case "failed":
        case "loading":
        case "success":
            return null;
    }
}
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
// Mixins via Intersections
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello, I'm " + name + ".");
    };
    return ConsoleLogger;
}());
// Takes two objects and merges them together
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
