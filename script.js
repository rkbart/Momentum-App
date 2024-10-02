function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString(undefined, options);
    document.getElementById('time').textContent = timeString;
}

// Update the time immediately, then every second
updateTime();
setInterval(updateTime, 1000);

const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Display a quote on first load
getRandomQuote();