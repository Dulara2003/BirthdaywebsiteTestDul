// Countdown Timer
const countdownDate = new Date("Nov 7, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}

const interval = setInterval(updateCountdown, 1000);

// Add message function
function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');
    const newMessage = document.createElement('li');
    newMessage.textContent = messageInput.value;
    messageList.appendChild(newMessage);
    messageInput.value = ''; // Clear the input field
}
