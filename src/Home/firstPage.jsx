import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to clg Page</h1>
      <Button variant="contained" color="primary" className="mt-4">
        <Link to="/about" className="text-white">Go to About</Link>
      </Button>
    </div>
  );
}
