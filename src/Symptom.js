import React from "react";

const Symptom = ({ id, question, handleOptionChange }) => {
  return (
    <p>
      {id}. {question}
      <input
        onChange={handleOptionChange}
        value="0"
        className="ml-5 mr-2"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>0</strong>
      <input
        onChange={handleOptionChange}
        value="1"
        className="ml-5 mr-2"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>1</strong>
      <input
        onChange={handleOptionChange}
        value="2"
        className="ml-5 mr-2"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>2</strong>
      <input
        onChange={handleOptionChange}
        value="3"
        className="ml-5 mr-2"
        name={"q" + id}
        type="radio"
        aria-label="Radio button for following text input"
      />
      <strong>3</strong>
    </p>
  );
};

export default Symptom;
