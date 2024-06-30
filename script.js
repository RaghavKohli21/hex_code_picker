function myColor() {
    // Get the value return by color picker
    var color = document.getElementById('colorTracker').value;
    // Set the bg color
    document.body.style.backgroundColor = color;

    // Take the hex code
    document.getElementById('box').value = color;
}
// myColor() function is called
document.getElementById('colorTracker')
    .addEventListener('input', myColor);