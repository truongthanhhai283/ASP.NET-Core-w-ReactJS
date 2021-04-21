// let data: any = 42;

// data = "42";

interface IDuck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: IDuck = {
  name: "heuy",
  numLegs: 2,
  makeSound: (sound: any) => console.log(sound),
};

const duck2: IDuck = {
  name: "deury",
  numLegs: 2,
  makeSound: (sound: any) => console.log(sound),
};

duck1.makeSound("quack");

export const ducks = [duck1, duck2];
