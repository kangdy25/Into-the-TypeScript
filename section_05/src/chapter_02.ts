// Interface 확장
type Animal = {
  name: string;
  color: string;
  age: number;
};

interface Dog extends Animal {
  name: string;
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Bird extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dog: DogCat = {
  name: "CoCo",
  color: "red",
  age: 4,
  isBark: true,
  isScratch: false,
};
