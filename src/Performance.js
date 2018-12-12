import React from "react";

const Performance = ({ id, question, handleOptionChange }) => {
  return (
    <p>
      {id}. {question}
      <input
        onChange={handleOptionChange}
        className="ml-5 mr-2"
        value="1"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>1</strong>
      <input
        onChange={handleOptionChange}
        className="ml-5 mr-2"
        value="2"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>2</strong>
      <input
        onChange={handleOptionChange}
        className="ml-5 mr-2"
        value="3"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>3</strong>
      <input
        onChange={handleOptionChange}
        className="ml-5 mr-2"
        value="4"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>4</strong>
      <input
        onChange={handleOptionChange}
        className="ml-5 mr-2"
        value="5"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>5</strong>
    </p>
  );
};

export default Performance;
