function padLeft(value: string, padding: string | number) {
  // ...
}

padLeft("hello", 4);
padLeft('hello', 'world');
// let indentedString = padLeft("Hello world", true);


// Unions with Common Fields
interface Bird {
  fly(): void;

  layEggs(): void;
}

interface Fish {
  swim(): void;

  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

// let pet = getSmallPet();
// pet.layEggs();
// pet.fly();


// Discriminating Unions
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function networkStatus(state: NetworkState): string {
  // state.code;
  switch (state.state) {
    case "failed":
    case "loading":
    case "success":
      return null;
  }
}


// Intersection Types
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// These interfaces are composed to have
// consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};


// Mixins via Intersections
class Person {
  constructor(public name: string) {
  }
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string) {
    console.log(`Hello, I'm ${name}.`);
  }
}


// Takes two objects and merges them together
function extend<First extends {}, Second extends {}>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

// 相当于扩展第一个实例的能力
const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
