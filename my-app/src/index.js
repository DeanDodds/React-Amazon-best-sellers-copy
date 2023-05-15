import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css'

const books = [
    {
        id: 1,
        author: 'Lucinda Riley',
        title: 'Atlas: The Story of Pa Salt: The epic conclusion to the Seven Sisters series',
        img: 'https://m.media-amazon.com/images/I/51dM3mS1wdL._SX328_BO1,204,203,200_.jpg',
    },
    {
        author: 'Jessie Inchauspé',
        title: 'The Glucose Goddess Method: Your four-week guide to cutting cravings, getting your energy back, and feeling amazing. With 100+ super easy recipes',
        img: 'https://m.media-amazon.com/images/I/5105MIgJQuL._SX382_BO1,204,203,200_.jpg ',
        id: 2,
    },
    {
        id: 3,
        author: 'Ronnie O Sullivan',
        title: 'Unbreakable',
        img: 'https://m.media-amazon.com/images/I/51xbeUPzfiL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    },
    {
        id: 4,
        author: 'Richard Osman',
        title: 'The Bullet That Missed: (The Thursday Murder Club 3)',
        img: 'https://m.media-amazon.com/images/I/41sNio+MT3L._SY344_BO1,204,203,200_.jpg',
    }
]


const BookList = () => {
    return (
    <section className='booklist'>
        {books.map((book) => {
            return <Book {...book} key={book.id}/>;
})}
    </section>)
}


const Book = (props) =>{
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>)


