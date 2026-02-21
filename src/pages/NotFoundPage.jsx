import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <Link to="/" className="px-4 py-2 bg-black text-white rounded">
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;