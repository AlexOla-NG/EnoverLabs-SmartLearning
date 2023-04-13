import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./test.module.css";
import Timer from "./clock";

const Test = () => {
	const [subject, setSubject] = useState("");
	const [start, setStart] = useState(true);
	const [allQuestions, setAllQuestions] = useState(null)
	const [choice, setChoice] = useState("");
	const [score, setScore] = useState(0);
	const [count, setCount] = useState(0);
	const [finalScore, setFinalScore] = useState(0);
	const [publish, setPublish] = useState(false);
	const [isLoading, setIsLoading] = useState(false)
	
	async function handleTest(e){
		e.preventDefault();

		const mysubject = subject		
		try {
			const questions = await axios.get(`https://questions.aloc.com.ng/api/v2/m?subject=${mysubject}`,
			{
				headers: {
				"AccessToken": "QB-91e2cfa590f5e7fcd4c8"
				}
		})
		setIsLoading(true);	
		setAllQuestions(questions.data.data)
			if(allQuestions){
				setIsLoading(false)
			}
			setStart(false)
			setTimeout(() => {
					submitTest();
				}, 1800000)

		} catch (error) {
			console.log(error.message);
		}
	}

	const submitTest = () => {
		setFinalScore(Number(score));
		setPublish(true);
		setCount(0);
		setAllQuestions(null);
	}
	const getPreviousQuestion = () => {
		if (count <= 0){
			setCount(0)
		} else{
			setCount(count-1);
		}
		if (allQuestions[count].answer === choice && choice !== null){
					setScore(Number(score) + 1);
				} 
	}
	const getNextQuestion = () => {
		if (count >=39){
			setCount(39)
			submitTest()
		} else {
			setCount(count+1);
		}
		if (allQuestions[count].answer === choice && choice !== null){
			setScore(Number(score) + 1);
			
		} 		
	}

	function TestProp() {
		return (
		  <div>
			{ 
			  allQuestions.map((question, index) => {
				if (index == count)
				return  <div key={index}>
				  <p className={styles.Question}>{index + 1}. {question.question}</p>
				  {
					question.image &&
					<img src={question.image} alt="photo" />
				  }
				  <p><input type="radio" name="option" id="optiona" value="a"  autoComplete="off" onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio}/> <label htmlFor="optiona"  className={styles.RadioLabel}>a. {question.option.a}</label></p>
				  <p><input type="radio" name="option" id="optionb" value="b"  autoComplete="off" onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio}/> <label htmlFor="optionb"  className={styles.RadioLabel}>b. {question.option.b}</label></p>
				  <p><input type="radio" name="option" id="optionc" value="c"  autoComplete="off" onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio}/> <label htmlFor="optionc"  className={styles.RadioLabel}>c. {question.option.c}</label></p>
				  <p><input type="radio" name="option" id="optiond" value="d"  autoComplete="off" onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio}/> <label htmlFor="optiond"  className={styles.RadioLabel}>d. {question.option.d}</label></p>
				  </div>
			   
	  })}	  
	  </div>
		)
	  }
	
	const ResetTest = () =>{
		setStart(true);
		setPublish(false);
	}
	return <div className={styles.TestMain}>
		{
			start &&
			<form onSubmit={handleTest} className={styles.TestForm}>
				<label htmlFor="subjects">Select a Subject</label>
				<select name="subjects" id="subjects" onChange={((e)=> setSubject(e.target.value))} required>
					<option value="">-- Subjects --</option>
					<option value="english">English</option>
					<option value="physics">Physics</option>
					<option value="chemistry">Chemistry</option>
					<option value="biology">Biology</option>
					<option value="mathematics">Mathematics</option>
					<option value="commerce">Commerce</option>
					<option value="accounting">Accounting</option>
					<option value="englishlit">Literature in English</option>
					<option value="government">Government</option>
					<option value="crk">Christian Religious Knowledge</option>
					<option value="geography">Geography</option>
					<option value="economics">Economics</option>
					<option value="irk">IRK</option>
					<option value="civiledu">Civic Education</option>
					<option value="insurance">Insurance</option>
					<option value="currentaffairs">Current Affairs</option>
					<option value="history">Histoty</option>
				</select>
				<button type="submit">Start</button>
			</form>
		}
		{
			allQuestions &&

			<div>
			<h1 className={styles.Subject}> <h1>{subject}</h1><h1><Timer duration={30 * 60 * 1000}/></h1></h1>
			<TestProp
				allQuestions={allQuestions}
			/>
		<div className={styles.ButtonContainer}>
		<button onClick={getPreviousQuestion} className={styles.SubmissionFormButton}><span>&laquo; </span>Previous</button>
	  	{ count <= 38 ? (<button onClick={getNextQuestion} className={styles.SubmissionFormButton}>Next<span> &raquo;</span></button>) : (<button onClick={getNextQuestion} className={styles.SubmissionFormButton}>Submit<span></span></button>)}
		</div>
			</div>
			
		}
		{
			publish &&
			<h1>Total Score: {finalScore}/40
			<form onSubmit={ResetTest}><button type="submit" className={styles.ResetButton}>Try Again</button></form>
			</h1>
		}
		
	</div>;
};

export default Test;


