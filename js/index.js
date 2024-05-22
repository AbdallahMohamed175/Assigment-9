var quotes = ['Be yourself; everyone else is already taken.' , 'So many books, so little time.' ,'A room without books is like a body without a soul.' ,'You only live once, but if you do it right, once is enough.'   ];
var author = [ '― Oscar Wilde' , '― Frank Zappa', '― Marcus Tullius Cicero' , '― Mae West'];
function newQuote(){
    var randomNumber =  Math.floor(Math.random() * (quotes.length));
    console.log(randomNumber)
    var checker = Number(localStorage.getItem("check"))
var i=0

      
  
do {
   
  randomNumber = Math.floor(Math.random() * (quotes.length));

} while (checker == randomNumber);


    localStorage.setItem("check" , randomNumber)
   
  document.getElementById('quoteDisplay').innerHTML = `<p class="text-danger fs-1">"${quotes[randomNumber]}"</p> <span class="text-primary fs-1">${ author[randomNumber]}</span>`;
}

