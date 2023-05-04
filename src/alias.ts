type CrushType ={
  name: string;
  age?: number;
  profession: string;
  address: string;
}

const crush1: CrushType ={
  name: 'Amina',
  age : 30,
  profession: 'Job Holder',
  address : 'kaizan'
}
const crush2: CrushType ={
  name: 'Jamina',
  age : 30,
  profession: 'Teaches',
  address : 'Taizan'
}
const crush3: CrushType ={
  name: 'Ramina',
  age : 22,
  profession: 'Student',
  address : 'Russian'
}

type crushMarriedType = boolean;

const isCrushMarried: crushMarriedType = false;

type CourseNameType = string;

const courseName: CourseNameType = "Next level Web Development";

type OperationType = (x:number, y:number)=>number;

const calculate = (
  number1: number, //10
  number2: number,  //20
  operation: OperationType  //(x,y) => x + y)
  ) => { 
  return operation(number1, number2);
}

calculate(10,20, (x,y) => x + y);
calculate(10,20, (x,y) => x - y);
calculate(10,20, (x,y) => x * y);
 