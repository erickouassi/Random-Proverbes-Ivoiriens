$(document).ready(() => {
	$("#new-quote").on("click", () => {
		const randomNum = num => Math.floor(Math.random() * num),
					randomColor = () => `hsl(${randomNum(360)},55%,45%)`;					  
		$('body').css('background',`linear-gradient(${randomNum(360)}deg, ${randomColor()}, ${randomColor()})`);
$.getJSON("https://gist.githubusercontent.com/erickouassi/7c3085161e831afd2fd40475237387c3/raw/09262537f52902e426ff42eb59681ecc52de70e1/random-quotes-225.json", quotes => {
	const quote = quotes[randomNum(quotes.length)];	  
			$("#text").html(`${quote.quoteText}`);
			$("#author").html(quote.quoteAuthor);
			$("#tweet-quote").attr('href',`https://twitter.com/intent/tweet?text=${quote.quoteText} - ${quote.quoteAuthor}`);
		})})
});