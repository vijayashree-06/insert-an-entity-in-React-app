import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div className="container">
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button className="add-book-btn">Add Book</button>
      </Link>
      <div className="book-list">
        {/* Render BookCard components here */}
      </div>
    </div>
  );
};

export default Home;
