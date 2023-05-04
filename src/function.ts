//normal function
//default parameter

function add(num1:number, num2:number=10): number
{
  return num1 + num2;
}
add(30,40);

//spread operator
const myFriends = ['abul', 'kabul', 'jabul'];
const newFriends = ['abila', 'kabila', 'jabila'];
myFriends.push(...newFriends)
const myBestFriends = {
  fullName : "Abul",
  age : 20,
}

const [bestFriend] = myFriends;
const {fullName: string} = myBestFriends;
console.log({string});
// console.log(myFriends)

const addArrow = (num1:number, num2:number):number => num1 + num2;

const arr = [5, 4, 7];

const newArray = arr.map((elm:number)=>elm*elm);

const person : {
  name:string;
  balance: number;
  addBalance(money:number):void;
} = {
  name: "John",
  balance : 5,
  addBalance(money: number){
    // console.log (`My new balance is ${this.balance+money}`);
  },
}

//rest parameter

// const greetFriends = (
//   friend1: string,
//   friend2: string,
//   friend3: string,
// ) : void => console.log(`HI ${friend1}\n hi ${friend2}\n hi ${friend3}\n`);

const greetFriends = (...friends: string[]): void =>
friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends('kashem', 'hashem', `gashem`);