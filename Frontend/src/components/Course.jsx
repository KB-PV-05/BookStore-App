import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Courses play a pivotal role in educational and professional
            development, providing structured learning experiences across
            various disciplines. Whether delivered in traditional classroom
            settings or through online platforms, courses offer an organized
            curriculum designed to impart specific knowledge and skills. They
            range from foundational courses that cover basic principles to
            advanced courses that delve into specialized topics. Through
            lectures, practical exercises, assessments, and interactive
            discussions, students gain a deep understanding of the subject
            matter.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
