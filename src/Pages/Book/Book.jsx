import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Book = ({ book }) => {
    console.log(book);
    const { image, bookName, author, category, rating, bookId } = book;
    return (
        <Link to={`bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border">
                <figure className='bg-gray-50 p-5 rounded-2xl' >
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>by: {author}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <CiStar /></div>
                    </div>
                </div>
            </div>

        </Link >
    );
};

export default Book;