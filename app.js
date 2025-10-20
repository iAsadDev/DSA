console.log("Hello DSA");

let number1 = [ 3, 4, 5, 6, 7,9,20,45,6];
let maxNumber = 1;
const GreaterNumber = () => {
  for (let i = 0; i < number1.length; i++) {
    if (number1[i] > maxNumber) {
            maxNumber = number1[i]
    }
  }
     let max = maxNumber

  console.log(max);
};
GreaterNumber();

let number = [ 3, 4, 5, 6, 7,9,20,45,1,6];
let min = number[0]
const MinmumNumber = ()=>{
    for(let i=0; i < number.length; i++){
        if(min > number[i]){
            min = number[i]
        }

    }
    let m = min
    console.log(m);
}
MinmumNumber();