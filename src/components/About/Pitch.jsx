import React from "react";

const Pitch = () => {
  return (
    <div className="leading-6 text-lg">
      <div className="font-bold">
        When I was 5, I got introduced to a computer. Eversince I've been in love with the
        idea of creating software, I joined a computer school. But, for real, what I
        learned with my time on the machine itself really gave me an edge with my
        programming skills.
      </div>
      <div className="mt-6">
        <div className="bg-[#009379] text-[#F6DCE9] font-semibold text-white py-2">
          <p>Codes are a puzzle. A game, just like any other game.</p>
        </div>
        <p className="mt-2">
          "Those who can imagine anything, can create the impossible" -{" "}
          <span className="italic">Quote by Alan Turing</span>
        </p>
        <div className="bg-[#009379] text-[#F6DCE9] font-semibold text-white py-2">
          <p>My coding style?</p>
        </div>
        <p className="mt-2">
          I write neat and clean properly formatted code based on best practices with
          clear comments and conventional variable names. I review my code thoroughly
          before submitting a pull request and test the feature according to the
          requirement while inspecting responsiveness and other style related issues
        </p>
      </div>
    </div>
  );
};

export default Pitch;
