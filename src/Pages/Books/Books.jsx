
import Book from '../Book/Book';

const Books = ({ data }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
            {
                data.map(book => <Book book={book}></Book>)
            }
        </div>
    );
};

export default Books;