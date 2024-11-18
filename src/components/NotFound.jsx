import { Link } from "react-router-dom";
import notFound from "/notFound.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <img src={notFound} alt="Not Found" />
      <p className="text-2xl mt-4">Oops! Page Not Found</p>
      <p className="text-lg">The page you are looking for might have been removed or its name changed or is temporarily unavailable.!</p>
      <Link
        to="/"
        className="mt-6 text-lg bg-green-300 text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg"
      >
        Go back to Home😊
      </Link>
    </div>
  );
};

export default NotFound;
