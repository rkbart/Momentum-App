//add quotes
const clickText = document.getElementById("interpunct");
const quotePopup = document.getElementById('quotePopup');
const submitQuote = document.getElementById('submitQuote');
const closePopup = document.getElementById('closePopup');
    

    // Show the popup
    clickText.addEventListener('click', function() {
        quotePopup.style.display = 'block';
    });

    // Close the popup
    closePopup.addEventListener('click', function() {
        quotePopup.style.display = 'none';
    });

    // Submit the quote
    submitQuote.addEventListener('click', function() {
        const quoteText = document.getElementById('add-quote').value;
        const authorText = document.getElementById('author').value;

        if (quoteText && authorText) {
            quotes.push({ kowt: quoteText, author: authorText });
            console.log(quotes); // Display the array in console
            quotePopup.style.display = 'none';
            document.getElementById('add-quote').value = ''; // Clear input
            document.getElementById('author').value = ''; // Clear input
            document.getElementById('quote').textContent = '"' + quotes[quotes.length - 1].kowt + '"' + " - " + quotes[quotes.length - 1].author;
        } else {
            alert('Please fill in both fields.');
        }
    });

     document.addEventListener('click', function(event) {
        if (!quotePopup.contains(event.target) && !clickText.contains(event.target)) {
            quotePopup.style.display = 'none';
           
        }
    });