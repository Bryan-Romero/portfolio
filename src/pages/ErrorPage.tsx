import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold pb-4">Error 404: Page Not Found</h1>
      <p className="text-2xl font-medium pb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text-xl ">
        Please check the URL or return to the homepage.{" "}
        <Link
          to="/"
          className="text-blue-500 hover:underline underline-offset-[6px]"
        >
          Go to the homepage
        </Link>
      </p>
    </div>
  );
}
