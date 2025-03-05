import { Link } from 'react-router-dom';
import { FaFish, FaBookmark, FaPlus } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <FaFish className="text-2xl" />
          <span>CastShare</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/new" className="flex items-center space-x-1 hover:text-blue-200">
            <FaPlus />
            <span>Share Cast</span>
          </Link>
          <Link to="/saved" className="flex items-center space-x-1 hover:text-blue-200">
            <FaBookmark />
            <span>Saved</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}