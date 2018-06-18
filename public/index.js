let ISBN

var app = function(){
    let ISBN = 9780942391046
    let url = 'https://openlibrary.org/api/books?bibkeys=ISBN:'+ ISBN +'&jscmd=details&format=json&jscmd=data';


  makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}


const requestComplete = function(){
  if (this.status !== 200) return;
  const book = JSON.parse(this.response);
  console.log(book);
  let book_author =
  console.log(book_author);



  // makeBookRequest(deck_id, cardRequestComplete);
}

const makeBookRequest = function(deck_id, callback){
  const url = 
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const bookRequestComplete = function(){
  if (this.status !== 200) return;
  const cards = JSON.parse(this.response);
  populateList(cards)

}


window.addEventListener('load', app);
