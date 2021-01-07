import React from 'react'
//
import "./QuesitonForm.css"
import Loader from "./Loader"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fecthQuestions } from "../redux/questionActions";

function QuestionForm() {
  const { questions, isQuestionsLoading, questionsError, currentQuestionId } = useSelector((state) => state.question);
  
  const renderNoData = () =>{
    return (
      <h2>No data</h2>
    )
  }

  if (isQuestionsLoading) {
    return <Loader />;
  }

  if (questions.length === 0)
  {
    renderNoData();
    return;
    
  }
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  if (currentQuestion === null)
  {
    renderNoData();
    return;
    
  }

  return (
    <div>
      return <div>{JSON.stringify(currentQuestion)}</div>;
    </div>
  )
}

export default QuestionForm