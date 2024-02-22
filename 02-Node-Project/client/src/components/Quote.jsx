import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <blockquote className="bg-white rounded p-10 shadow  italic font-semibold ">
      <p className="text-xl text-gray-900 mb-3">&quot;{quote}&quot;</p>
      <span className="text-base text-gray-600 ml-5">- {author}!</span>
    </blockquote>
  );
};

export default Quote;
