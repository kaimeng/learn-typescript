// Numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

function getSomeValue(): number {
  return 1
}

enum E {
  A,
  B = getSomeValue()
}

console.log(E.A);
console.log(E.B);


// String enums
enum Condition {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}


// Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}


// Computed and constant members
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length
}


//Union enums and enum member types
enum ShapeKind {
  Circle,
  Square
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  // kind: ShapeKind.Square, // Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
  // Actually it is literal types, (numeric literal types)
  kind: ShapeKind.Circle, // 0,
  radius: 100
};


// Reverse mappings
enum Enum {
  A
}

console.log(Enum[Enum.A]);


enum AmbientEnum {
  A = 1,
  B,
  C = 2
}

function ambient(e: AmbientEnum) {
  switch (e) {
    case AmbientEnum.A:
      console.log('A1');
    case AmbientEnum.B:
      console.log('B1');
    case AmbientEnum.C:
      console.log('C1');
    default:
      console.log("HEHE");
  }
}

ambient(AmbientEnum.C); // B1 C1 HEHE
