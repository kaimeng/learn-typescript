interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface NotOkay {
  //[x: number]: Animal;

  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;

  length: number; // ok, length is a number
  //name: string; // error, the type of 'name' is not a subtype of the indexer
}

interface NumberOrStringDictionary {
  [index: string]: number | string;

  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
//myArray2[2] = "Mallory"; // error!
