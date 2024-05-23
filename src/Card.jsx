import React, { useState, useEffect } from 'react';
import { db } from './Firebase/Firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';

function Card() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = query(collection(db, "Questions"));
        const querySnapshot = await getDocs(result);
        const questionsData = querySnapshot.docs.map(doc => doc.data());
        setQuestions(questionsData);
        console.log(questionsData);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-full max-w-md p-6 bg-white shadow-md rounded-lg'>
        {currentQuestion && (
          <div>
            <h1 className='text-xl font-semibold mb-4'>{currentQuestion.question}</h1>
            <select className='block w-full bg-gray-200 border border-gray-300 p-2 rounded-md mb-4'>
            {currentQuestion.incorrect_answers && Object.keys(currentQuestion.incorrect_answers).map((key, optionIdx) => (
                <option key={optionIdx}>{currentQuestion.incorrect_answers[key]}</option>
              ))}
              <option>{currentQuestion.correct_answer}</option>
            </select>

            <div className='flex flex-row gap-2 items-center justify-center'>
                {currentQuestionIndex > 0 && (
                  <button onClick={handlePrevQuestion} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Previous
                  </button>
                )}
                {currentQuestionIndex < questions.length - 1 && (
                  <button onClick={handleNextQuestion} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Next
                  </button>
                )}
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

