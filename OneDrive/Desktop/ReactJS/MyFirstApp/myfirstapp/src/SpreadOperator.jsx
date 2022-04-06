import React from "react";

const SpreadOper = () => {
  const fullName = ["Sagar" , "Dapurkar"];
  const bioData = [1 , ...fullName , 21, "Bouy!"];
  console.log(fullName);
  console.log(bioData);

  const array1 = [111 , 222 , 333 , 444 , 555];
  const array2 = [666 , 777 , 888 , 999 , 1111];  
  console.log([...array1 , ...array2]);

  const abc = ['a','b','c','d'];  
  const [first , ...remaining] = abc;
  console.log(first);
  console.log(remaining);

  const name = {
      fname : "Jyoti",
      lname : "Vivek",
  }

  const bio = {
      id : "1",
      ...name,
      Age : "Tereko Kya Karna He?",
      Sex : "Not Till!",
  }

  console.log(bio);
};

export default SpreadOper;