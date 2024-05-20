import React, { useState, useEffect } from 'react';

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
        if (response.status === 429) {
          throw new Error('Too Many Requests');
        }
        const data = await response.json();
        setQuizData(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  const handleOptionSelect = (questionIndex, event) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: event.target.value,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Quiz App</h1>
      {quizData.length > 0 && quizData.map((questionData, index) => (
        <div key={index} className="max-w-xl mx-auto mb-6 p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: questionData.question }}></h2>
          </div>
          <form>
            {[...questionData.incorrect_answers, questionData.correct_answer]
              .sort()
              .map((option, optionIndex) => (
                <div key={optionIndex} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name={`question-${index}`}
                      value={option}
                      checked={selectedOptions[index] === option}
                      onChange={(event) => handleOptionSelect(index, event)}
                    />
                    <span className="ml-2" dangerouslySetInnerHTML={{ __html: option }}></span>
                  </label>
                </div>
              ))}
          </form>
        </div>
      ))}
    </div>
  );
};

export default App;
