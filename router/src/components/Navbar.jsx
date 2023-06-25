import React from "react";
import {
  Link,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  console.log(location, "location");
  console.log(searchParams.get("test"), "searchParams");
  console.log(params, "params");

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="videos">Videos</Link>
      <Link to="?test=1111">Query String</Link>
    </nav>
  );
}
