// Counter
let count = 0;
const counter = setInterval(() => {
    if (count !== 100) {
        count++;
        document.querySelector('.counter').textContent = count + '+';
    } else {
        // Clear the interval when count reaches 100
        clearInterval(counter);
        document.querySelector('.counter').textContent = count + '+'; // Optionally display the final count
    }
}, 20);