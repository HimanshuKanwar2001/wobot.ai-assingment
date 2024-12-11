
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Recipe App</Link>
        <div>
          <Link to="/" className="px-4">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
