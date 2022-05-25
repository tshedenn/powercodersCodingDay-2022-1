let books =[
    {
      Title : 'A Walk To Remember',
      Author : 'Nicholas Spark'
    },
    {
      Title : 'A Walk To Remember',
      Author : 'Nicholas Spark'
    },
    {
      Title : 'A Walk To Remember',
      Author : 'Nicholas Spark'
    }
  ];
let sold = [];
for (let i=0; i <= (books.length+1);i++ ){
  sold[i]= books.shift(i);
  console.log(`sold container has: ${sold.length} and book container has: ${books.length}`)
  if(books.length === 0){
    console.log("All books sold out!");
    books.Title = prompt('Book Title');
    books.Author = prompt('Book Author');
    console.log(books);
  }
  else{
    console.log(`you have ${books.length} books `);
  }
}


// if (books.length===0){
//   let newTiltle = prompt(`Enter new book title:`)
//   let newAuthor = prompt(`enter the new author:`)
//   books.push= {Title: newTiltle, Author : newAuthor}    
// } 


