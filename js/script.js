document.getElementById('option1').addEventListener('click', function() {
    displayResult('You chose Option 1!');
});

document.getElementById('option2').addEventListener('click', function() {
    displayResult('You chose Option 2!');
});

document.getElementById('likeBoth').addEventListener('click', function() {
    displayResult('You like both options!');
});

document.getElementById('dontCare').addEventListener('click', function() {
    displayResult('You don\'t care for either option.');
});

function displayResult(message) {
    document.getElementById('result').innerText = message;
}
