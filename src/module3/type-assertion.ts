let emni: any;

emni = "Next level of Development";

(emni as string).length;
<string>emni.length;

function kgToGram(param: string| number):string|number|undefined{
  if(typeof param === 'string'){
    const value = parseFloat(param)*1000;
    return `the converted value is ${value} gram`
  }
  if(typeof param === 'number'){
    const value = param * 1000;
    return value;
}
}

const resultToBeNumber = <number> kgToGram(1000);
const resultToString = <string> kgToGram("1000");
 
type customErrorType = {
  message : string;
}
 try {


 }
 catch(err){
  console.log((err as customErrorType).message)

 }