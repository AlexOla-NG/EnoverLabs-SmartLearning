import React, { useState } from "react";
import axios from "axios";
import styles from "./test.module.css";

const Test = () => {
	const [subject, setSubject] = useState("");
	const [start, setStart] = useState(true);
	const [question, setQuestion] = useState("");
	const [optionA, setOptionsA] = useState("");
	const [optionB, setOptionsB] = useState("");
	const [optionC, setOptionsC] = useState("");
	const [optionD, setOptionsD] = useState("");
	const [correctOption, setCorrectOption] = useState("")
	const [choice, setChoice] = useState("");
	const [score, setScore] = useState(0);
	const [count, setCount] = useState(1);
	const [finalScore, setFinalScore] = useState(0);
	const [publish, setPublish] = useState(false);
	const [formVisibility, setFormVisibility] = useState(true);

	
	async function handleTest(e){
		e.preventDefault();

		const mysubject = subject		
		try {
			const questions = await axios.get(`https://questions.aloc.com.ng/api/v2/q?subject=${mysubject}`,
			{
				headers: {
				"AccessToken": "QB-91e2cfa590f5e7fcd4c8"
				}
		})
			setQuestion(questions.data.data.question);
			setOptionsA(questions.data.data.option.a)
			setOptionsB(questions.data.data.option.b)
			setOptionsC(questions.data.data.option.c)
			setOptionsD(questions.data.data.option.d)
			setCorrectOption(questions.data.data.answer)
			setStart(false)
		} catch (error) {
			console.log(error.message);
		}
	}

	const handleUpdateScore = async (e) => {
		e.preventDefault();

		if (correctOption === choice){
			console.log("Correct")
			setScore(Number(score) + 1);
			// setCount(Number(count) + 1)
			setFinalScore(score);
		} else{
			console.log("Wrong Answer")
	
			setFinalScore(score);
		}
		// console.log(correctOption);
		// console.log(choice);
		// console.log(score);
		
		if(count > 19){
			setPublish(true);
			setFormVisibility(false);
			console.log(count)
		} else{
			handleTest(e);
			setCount(Number(count) + 1)
			console.log(count)
			console.log(score)
		}
		
	}
	const ResetTest = () =>{
		setCount(0)
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
			question && optionA && optionB && optionC && optionD && formVisibility &&

			
			<form onSubmit={handleUpdateScore} className={styles.SubmissionForm}>
			<h1 className={styles.Subject}>{subject}</h1>
			<p className={styles.Question}>{count}. {question}</p>
			<p><input type="radio" name="option" id="optiona" value="a"  onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio}/> <label htmlFor="optiona"  className={styles.RadioLabel} onChange={((e)=>e.target.style.color="red")}>a. {optionA}</label></p>
			<p><input type="radio" name="option" id="optionb" value="b"  onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio} /> <label htmlFor="optionb" className={styles.RadioLabel} onChange={((e)=>e.target.style.color="red")}>b. {optionB}</label></p>
			<p><input type="radio" name="option" id="optionc" value="c"  onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio}/> <label htmlFor="optionc" className={styles.RadioLabel} onChange={((e)=>e.target.style.color="red")}>c. {optionC}</label></p>
			<p><input type="radio" name="option" id="optiond" value="d"  onChange={((e)=> setChoice(e.target.value))} className={styles.SelectRadio}/> <label htmlFor="optiond" className={styles.RadioLabel} onChange={((e)=>e.target.style.color="red")}>d. {optionD}</label></p>

			<div className={styles.ButtonContainer}><button type="submit"  className={styles.SubmissionFormButton}><span>&laquo; </span>Previous</button><button type="submit"   className={styles.SubmissionFormButton}>Next <span> &raquo;</span></button></div>

		</form>
		}
		{
			publish &&
			<h1>Total Score: {finalScore}/20
			<form onSubmit={ResetTest}><button type="submit" className={styles.ResetButton}>Try Again</button></form>
			</h1>
		}
		
	</div>;
};

export default Test;


// {
// 	question &&
// 	<p className={styles.Question}>{question}</p>
// }
// {
// 	optionA &&
// 	<p  className={styles.Option}>A. <input type="radio" name="option" id="option" /> {optionA}</p>
// }
// {
// 	optionB &&
// 	<p  className={styles.Option}>B. <input type="radio" name="option" id="option" /> {optionB}</p>
// }	
// {
// 	optionC &&
// 	<p  className={styles.Option}>C. <input type="radio" name="option" id="option" /> {optionC}</p>
// }	
// {
// 	optionD &&
// 	<p  className={styles.Option}>D. <input type="radio" name="option" id="option" /> {optionD} 
	
// 	<p className={styles.NextButton}> <button onClick={handleTest}>Next</button></p>
// 	</p>
// }