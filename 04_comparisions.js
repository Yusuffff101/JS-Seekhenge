/* console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true */
/* The reason is that an equality check == and comparisions > < >= <= work differently
comparisions convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false */
console.log("2" == 2);
console.log("2" === 2);//strict check, checks data type as well

