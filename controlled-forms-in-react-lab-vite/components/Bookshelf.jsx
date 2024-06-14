import { useState } from 'react'

export default function Bookshelf() {
    const initialBook = {
        title: '',
        author: ''
    }

    const [newBook, setNewBook] = useState(initialBook)
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])

    const handleSubmit = (event) => {
        event.preventDefault()

        
        setBooks([...books, newBook])

       
        setNewBook(initialBook)
    }

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.id]: event.target.value })
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        id="title"
                        onChange={handleInputChange}
                        value={newBook.title}
                    />
                    <label htmlFor="title">Title:</label>

                    <input
                        type="text"
                        placeholder="Author"
                        id="author"
                        onChange={handleInputChange}
                        value={newBook.author}
                    />
                    <label htmlFor="author">Author:</label>

                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
