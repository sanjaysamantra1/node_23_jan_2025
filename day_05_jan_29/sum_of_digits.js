function sumOfDigits(num){
    let sum = 0;
    let n = num;
    while(num!=0){
        let rem = num % 10;
        num = parseInt(num/10);
        sum = sum + rem;
    }
    console.log(`Sum of digits for the number ${n} is ${sum}`)
}
sumOfDigits(125); // 8
sumOfDigits(234); // 9
sumOfDigits(345); // 12