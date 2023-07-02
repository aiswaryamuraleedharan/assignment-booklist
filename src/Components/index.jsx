import React from "react";

const styling = {
    width:'25%',
    margin:'auto',
}

function BookList() {
    const book = [
        {
        title: "The Invisible Man",
        author: "H.G Wells",
        genre: "Fiction",
        },
        {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fantasy",
        },
        {
        title: "Animal Farm",
        author: "George Orwell",
        genre: "Political satire",
        },
        {
        title: "Harry Potter",
        author: "J.K Rowling",
        genre: "Fantasy",
        }
    ]

  return (
    <div>
        <h1>BookList</h1>
        {book.map((book,index) => (
            <div style={styling} key={index}>
                <h3 style={{color:'blue'}}>{book.title}</h3>
                <p>Author:{book.author}</p>
                <p>Genre:{book.genre}</p>
            </div>
        ))}
    </div>
  );
}

export default BookList;