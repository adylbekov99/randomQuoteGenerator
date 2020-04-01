document.addEventListener("DOMContentLoaded", function(){
    var quotes = ['Quitter never win, winners never quit', 'Stay hungry, stay foolish', 'Float like a butterfly, sting like a bee'];
    var button = document.querySelector("#generate-button");
    var h1 = document.querySelector("#generator .quote");

    button.addEventListener("click", function(){
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        if(h1.textContent == randomQuote) {
            h1.textContent = quotes[Math.floor(Math.random() * quotes.length) - 1];
        } else {
            h1.textContent = randomQuote;
        }
    })

})