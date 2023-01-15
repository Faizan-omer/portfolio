import React from "react";
import me from "../../assets/about/me.jpg";

const Bio = () => {
  return (
    <div className="md:flex md:w-full md:items-center md:justify-center">
      <div className="md:basis-2/5 md:flex md:flex-col md:items-center">
        <img src={me} alt="" className="w-48 h-48 object-cover border border-black" />
        <div className="mt-4 text-lg leading-6">
          <h2 className="font-semibold underline underline-offset-2">Faizan Omer</h2>
          <p>Software Engineer</p>
          <p>MERN</p>
        </div>
      </div>
      <div className="md:basis-2/5">
        <div className="mt-12 text-lg leading-6">
          <h2 className="font-semibold">Bio:</h2>
          <p>
            I completed my Bachelors in Computer Science from NUCES, karachi. A forever
            student looking to learn new things related and or unrelated to my field of
            work. In my free time I like to relax with a little music and a book if my pet
            doesn't decide to bother me that is.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
