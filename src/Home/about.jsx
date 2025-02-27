import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600">About Page</h1>
      <Link to="/" className="text-blue-500 mt-4">Back to Home</Link>
    </div>
  );
}
