function calculate() {

    // YOUR CODE GOES HERE
    let result = document.getElementById('result');
    let num1 = Number(document.getElementById('number1').value);
    let num2 = Number(document.getElementById('number2').value);

    let ret = 0
    for (let i = num1; i <= num2;i++) {
        ret+=i;
    }
    result.innerText = 'The sum is: ' + ret;
}




