// Discriminated Unions
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

// Polymorphic this types
class BasicCalculator {
  public constructor(protected value: number = 0) {
  }

  public currentValue(): number {
    return this.value;
  }

  public add(operand: number): this {
    this.value += operand;
    return this;
  }

  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }

  // ... other operations go here ...
}

let v = new BasicCalculator(2)
  .multiply(5)
  .add(1)
  .currentValue();

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }

  public sin() {
    this.value = Math.sin(this.value);
    return this;
  }

  // ... other operations go here ...
}

let vs = new ScientificCalculator(2)
  .multiply(5)
  .sin()
  .add(1)
  .currentValue();


// Index types
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(n => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2014
};

// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
let makeAndModel: string[] = pluck(taxi, ["manufacturer", "model"]);

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(taxi, ["model", "year"]);

let carProps: keyof Car; // the union of ('manufacturer' | 'model' | 'year')

function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]; // o[propertyName] is of type T[K]
}

let nam: string = getProperty(taxi, "manufacturer");
let year: number = getProperty(taxi, "year");

interface Dictionary<T> {
  [key: string]: T;
}
let keys: keyof Dictionary<number>; // string | number
let value: Dictionary<number>["foo"]; // number
