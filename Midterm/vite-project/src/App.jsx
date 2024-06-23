import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import books from './Data/Data'; 
import './App.css';

{/* I keep baffling myself with having so many different files allover,
  
  I keep running into unexplainable pathing issues.
  
  so no problem when all components are on one page... I might be missing something.  */}




function App() {
  const [selectedBookId, setSelectedBookId] = useState(0);

  const renderRating = (rating) => "⭐️".repeat(rating);

  const selectedBook = books.find(book => book.id === selectedBookId);

return (
 <div className="container">
  
  <div className="row justify-content-center mb-4 border border-3 rounded mt-3 p-3">
    <div className="col-md-4">
      <img src={selectedBook.coverImg} alt="Cover" className="selected-book-img img-fluid" />
    </div>
    <div className="col-md-8">
      <p>Author: {selectedBook.author}</p>
      {selectedBook.coAuthor && <p>Co-Author: {selectedBook.coAuthor}</p>}
      {selectedBook.sequels && (
        <>
          <h3>Sequels:</h3>
          <ol>
            {selectedBook.sequels.map((sequel, index) => (
              <li key={index}>{sequel}</li>
            ))}
          </ol>
        </>
      )}
      <p>Rating: {renderRating(selectedBook.rating)}</p>
    </div>
  </div>
  
  <div className="row justify-content-center ">
    <h2>The Book List</h2>
  </div>
  <div className="row justify-content-center">
    {books.map((book) => (
      <div key={book.id} onClick={() => setSelectedBookId(book.id)} className="col-auto mb-2 me-2" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}> {/* fun with inline css? Bootstrap doesn't want to co-operate */}
        <img src={book.coverImg} alt="Cover" style={{ width: '50px', margin: '10px' }} />
        <span>{book.name}</span>
      </div>
    ))}
  </div>
</div>
);
}

export default App;