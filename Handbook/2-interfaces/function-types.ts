interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

let mySearch2: SearchFunc;

mySearch2 = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

let mySearch3: SearchFunc;
/*
mySearch3 = function (src, sub) {
  let result = src.search(sub);
  return "string";
};*/
