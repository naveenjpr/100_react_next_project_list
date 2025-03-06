import { Link} from "react-router-dom"
export default function NotFoundPage() {

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-7xl md:text-8xl font-bold">404</h1>
      <p className="text-lg md:text-xl mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  )
}
