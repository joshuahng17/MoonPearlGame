
function AnswerChoices({onAnswerChoice}){
    //console.log(onAnswerChoice);
    return (
        <>
            <button onClick={() => onAnswerChoice(true)}>Yes</button>
            <button onClick={() => onAnswerChoice(false)}>No</button>
        </>
    )
}

export default AnswerChoices