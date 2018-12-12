import React from "react";

const EvaluationTime = () => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <strong>Is this evaluation based on a time when the child:</strong>
          &nbsp;
          <input
            name="eval-options"
            type="radio"
            aria-label="Radio button for following text input"
          />
          &nbsp;<strong>was on medication</strong>&nbsp;
          <input
            name="eval-options"
            type="radio"
            aria-label="Radio button for following text input"
          />
          &nbsp;<strong>was not on medication</strong>&nbsp;
          <input
            name="eval-options"
            type="radio"
            aria-label="Radio button for following text input"
          />
          &nbsp;<strong>not sure?</strong>
        </div>
      </div>
    </div>
  );
};

export default EvaluationTime;
