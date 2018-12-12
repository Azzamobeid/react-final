import React, { Component } from "react";
import "./Home.css";
import Title from "./Title";
import EvaluationTime from "./EvaluationTime";
import Symptom from "./Symptom";
import Performance from "./Performance";

import symptomsQuestions from "./symptomsQuestions";
import performanceQuestions from "./performanceQuestions";

class Home extends Component {
  state = { symptomsQuestions, performanceQuestions };
  constructor(props) {
    super(props);
  }

  handleOptionChange = (e, q) => {
    var existingQuestion = null;
    if (q.id > 0 && q.id <= 35) {
      // Symptoms Questions
      existingQuestion = this.state.symptomsQuestions.find(
        question => question.id === q.id
      );
      existingQuestion.answer = parseInt(e.target.value);
      this.setState({
        symptomsQuestions
      });
    } else {
      // console.log(JSON.stringify(q, null, 2));
      // Performance Questions
      existingQuestion = this.state.performanceQuestions.find(
        question => question.id === q.id
      );
      existingQuestion.answer = parseInt(e.target.value);
      this.setState({
        performanceQuestions
      });
    }
  };

  render() {
    var { symptomsQuestions, performanceQuestions } = this.state;
    return (
      <>
        <Title />
        <EvaluationTime />
        <h4>Symptoms </h4>
        {symptomsQuestions.map(q => {
          return (
            <Symptom
              key={q.id}
              id={q.id}
              question={q.question}
              handleOptionChange={e => {
                this.handleOptionChange(e, q);
              }}
            />
          );
        })}

        <h4>Academic Performance</h4>
        {performanceQuestions.map(q => {
          return (
            <Performance
              key={q.id}
              id={q.id}
              question={q.question}
              handleOptionChange={e => {
                this.handleOptionChange(e, q);
              }}
            />
          );
        })}
      </>
    );
  }
}

export default Home;
