// Numeric enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
function getSomeValue() {
    return 1;
}
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = getSomeValue()] = "B";
})(E || (E = {}));
console.log(E.A);
console.log(E.B);
// String enums
var Condition;
(function (Condition) {
    Condition["Up"] = "UP";
    Condition["Down"] = "DOWN";
    Condition["Left"] = "LEFT";
    Condition["Right"] = "RIGHT";
})(Condition || (Condition = {}));
// Heterogeneous enums
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// Computed and constant members
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
//Union enums and enum member types
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    // kind: ShapeKind.Square, // Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    // Actually it is literal types, (numeric literal types)
    kind: ShapeKind.Circle,
    radius: 100
};
// Reverse mappings
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
console.log(Enum[Enum.A]);
var AmbientEnum;
(function (AmbientEnum) {
    AmbientEnum[AmbientEnum["A"] = 1] = "A";
    AmbientEnum[AmbientEnum["B"] = 2] = "B";
    AmbientEnum[AmbientEnum["C"] = 2] = "C";
})(AmbientEnum || (AmbientEnum = {}));
function ambient(e) {
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
ambient(AmbientEnum.C);
