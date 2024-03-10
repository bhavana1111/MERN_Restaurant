import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function NotFound() {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="Not Found" />
          <h1>LOOKS LIKE YOU ARE LOST</h1>
          <p>We can't find the page you are looking for</p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>{" "}
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
