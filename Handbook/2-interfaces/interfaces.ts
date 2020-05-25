function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// with interface
interface LabeledValue {
  label: string;
}

function printLabel2(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);

// Optional Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

//readonly array
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// readonly vs const
// Variables use const whereas properties use readonly.


// Excess Property Checks
//let mySquare2 = createSquare({ colour: "red", width: 100 });
let mySquare3 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100 };
let mySquare4 = createSquare(squareOptions);
