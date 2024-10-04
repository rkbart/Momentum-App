//add quotes
const clickText = document.getElementById("interpunct");
const quotePopup = document.getElementById('quotePopup');
    // const overlay = document.getElementById('overlay');
    const submitQuote = document.getElementById('submitQuote');
    const closePopup = document.getElementById('closePopup');
    // const quotes = [];

    // Show the popup
    clickText.addEventListener('click', function() {
        quotePopup.style.display = 'block';
        // overlay.style.display = 'block';
    });

    // Close the popup
    closePopup.addEventListener('click', function() {
        quotePopup.style.display = 'none';
        // overlay.style.display = 'none';
    });

    // Submit the quote
    submitQuote.addEventListener('click', function() {
        const quoteText = document.getElementById('add-quote').value;
        const authorText = document.getElementById('author').value;

        if (quoteText && authorText) {
            quotes.push({ kowt: quoteText, author: authorText });
            console.log(quotes); // Display the array in console
            quotePopup.style.display = 'none';
            // overlay.style.display = 'none';
            document.getElementById('add-quote').value = ''; // Clear input
            document.getElementById('author').value = ''; // Clear input
        } else {
            alert('Please fill in both fields.');
        }
    });

    // Close the popup when clicking outside of it
    //overlay.addEventListener('click', function() {
       // quotePopup.style.display = 'none';
        // overlay.style.display = 'none';
    //});

    document.addEventListener('click', function(event) {
        if (!quotePopup.contains(event.target) && !clickText.contains(event.target)) {
            quotePopup.style.display = 'none';
           
        }
    });