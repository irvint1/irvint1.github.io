let justinBtn = document.getElementById('justin-btn');
// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
justinBtn.addEventListener('mouseover', mOver);

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
justinBtn.addEventListener('mouseout', mOut);

function mOver() {
    let result = document.getElementById('result');
    result.innerText = 'Welcome to My Heart';
    result.style.backgroundColor ='pink';
    result.style.color = 'blue';
}

function mOut() {
    let result = document.getElementById('result');
    result.innerText = "Don't Leave my Heart";
    result.style.backgroundColor ='black';
    result.style.color = 'red';
}