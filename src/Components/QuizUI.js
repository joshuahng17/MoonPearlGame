import { useState } from "react";
import LocationQuestion from "./LocationQuestion";
import AnswerChoices from "./AnswerChoices";
import Results from "./Results";
import Locations from "../Data/Locations.json";

const shuffledLocations = Locations.sort(randomize);

function randomize(a, b){
    return Math.random() - 0.5;
}

function QuizUI(){
    
    function handleClick(answer){
        if(answer === shuffledLocations[answeredQuestions].isPearl){
            setCorrectAnswers(correctAnswers+1);
        }
        setAnsweredQuestions(answeredQuestions+1);
    }

    const [count, setCount] = useState(10);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    return(
        <>
        <h3>Where could the moon pearl be?</h3>
        <h5>(Uses HMG logic)</h5>
            <div>
                {answeredQuestions < count ? (
                <LocationQuestion location = {shuffledLocations[answeredQuestions]}/>
                ) : (
                <Results correct = {correctAnswers} total = {answeredQuestions}/>    
                )}
            </div>
            <div>
            {answeredQuestions < count && <AnswerChoices onAnswerChoice = {handleClick}/>}
            </div>
            <br></br>
            <div>
                <h4>Set Number of Questions</h4>
                <input onChange={(event)=>{setCount(event.target.value)}}></input>
            </div>
        </>
    )
}

export default QuizUI