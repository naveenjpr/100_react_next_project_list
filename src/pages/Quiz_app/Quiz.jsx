import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Common page/Header';

const QuizApp = () => {

    const location = useLocation()
  
  // Quiz questions
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au"
    }
  ];

  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizTimeLeft, setQuizTimeLeft] = useState(30 * 60);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizStatus, setQuizStatus] = useState('start');
  const [selectedOption, setSelectedOption] = useState(null);
  const quizTimerRef = useRef(null);

  // Current question
  const currentQuestion = questions[currentQuestionIndex];

  // Calculate current score based on userAnswers
  const calculateScore = () => {
    return userAnswers.reduce((total, answer) => {
      return total + (answer.isCorrect ? 1 : 0);
    }, 0);
  };

  // Start quiz
  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setQuizStatus('quiz');
    setSelectedOption(null);
    setQuizTimeLeft(30 * 60);
    startQuizTimer();
  };

  // Timer functions
  const startQuizTimer = () => {
    clearInterval(quizTimerRef.current);
    
    quizTimerRef.current = setInterval(() => {
      setQuizTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(quizTimerRef.current);
          quizTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const quizTimeUp = () => {
    const unansweredQuestions = questions.slice(userAnswers.length).map(q => ({
      question: q.question,
      userAnswer: null,
      correctAnswer: q.correctAnswer,
      isCorrect: false,
      timeUp: true
    }));
    
    setUserAnswers(prev => [...prev, ...unansweredQuestions]);
    setQuizStatus('results');
  };

  // Select answer
  const selectAnswer = (option) => {
    const existingAnswerIndex = userAnswers.findIndex(
      answer => answer.question === currentQuestion.question
    );

    const isCorrect = option === currentQuestion.correctAnswer;
    const newAnswer = {
      question: currentQuestion.question,
      userAnswer: option,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
      timeUp: false
    };

    if (existingAnswerIndex >= 0) {
      // Update existing answer
      const updatedAnswers = [...userAnswers];
      const previousAnswer = updatedAnswers[existingAnswerIndex];
      updatedAnswers[existingAnswerIndex] = newAnswer;
      
      setUserAnswers(updatedAnswers);
      // Update score based on previous answer
      if (previousAnswer.isCorrect && !isCorrect) {
        setScore(prev => prev - 1);
      } else if (!previousAnswer.isCorrect && isCorrect) {
        setScore(prev => prev + 1);
      }
    } else {
      // Add new answer
      setUserAnswers(prev => [...prev, newAnswer]);
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
    }

    setSelectedOption(option);
  };

  // Next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      goToQuestion(currentQuestionIndex + 1);
    } else {
      submitQuiz();
    }
  };

  // Previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      goToQuestion(currentQuestionIndex - 1);
    }
  };

  // Submit quiz early
  const submitQuiz = () => {
    const unansweredQuestions = questions.slice(userAnswers.length).map(q => ({
      question: q.question,
      userAnswer: null,
      correctAnswer: q.correctAnswer,
      isCorrect: false,
      timeUp: false
    }));
    
    setUserAnswers(prev => [...prev, ...unansweredQuestions]);
    setQuizStatus('results');
    clearInterval(quizTimerRef.current);
  };

  // Go to specific question
  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    const existingAnswer = userAnswers.find(
      answer => answer.question === questions[index].question
    );
    setSelectedOption(existingAnswer?.userAnswer || null);
  };

  // Restart quiz
  const restartQuiz = () => {
    setQuizStatus('start');
  };

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      clearInterval(quizTimerRef.current);
    };
  }, []);

  // Set selected option when question changes
  useEffect(() => {
    const existingAnswer = userAnswers.find(
      answer => answer.question === currentQuestion.question
    );
    setSelectedOption(existingAnswer?.userAnswer || null);
  }, [currentQuestionIndex, currentQuestion.question, userAnswers]);

  // Start screen
  if (quizStatus === 'start') {
    return (
      <>
                  <div>{location.pathname === "/QuizApp" ? <Header /> : null}</div>

      
      <div className="w-full mx-auto h-screen overflow-auto bg-white rounded-lg shadow-lg">
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Quiz!</h1>
          <p className="text-gray-600 mb-8">You have 30 minutes to complete the quiz. Answering all questions is optional.</p>
          <button 
            onClick={startQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Start Quiz
          </button>
        </div>
      </div>
      </>

    );
  }

  // Quiz screen
  if (quizStatus === 'quiz') {
    const existingAnswer = userAnswers.find(
      answer => answer.question === currentQuestion.question
    );
    const isAnswered = !!existingAnswer;

    return (
      <>
                        <div>{location.pathname === "/QuizApp" ? <Header /> : null}</div>

      <div className="w-full mx-auto h-screen overflow-auto max-w-2xl bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-700 font-medium">
              Question {currentQuestionIndex + 1}/{questions.length}
            </div>
            <div className="px-3 py-1 rounded-full font-bold bg-purple-100 text-purple-800">
              Quiz Time: {formatTime(quizTimeLeft)}
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-6">{currentQuestion.question}</h2>
          
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = 'w-full text-left bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition duration-200';
              
              if (option === selectedOption) {
                buttonClass += ' border-2 border-blue-500';
              }
              
              return (
                <button
                  key={index}
                  onClick={() => selectAnswer(option)}
                  className={buttonClass}
                >
                  {option}
                </button>
              );
            })}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-gray-700 font-medium">Questions Answered: {userAnswers.length}/{questions.length}</div>
            <div className="flex space-x-2">
              {currentQuestionIndex > 0 && (
                <button 
                  onClick={prevQuestion}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                  Previous
                </button>
              )}
              <button 
                onClick={submitQuiz}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Submit Quiz
              </button>
              <button 
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
      </>

    );
  }

  // Results screen
  if (quizStatus === 'results') {
    return (
      <>
                        <div>{location.pathname === "/QuizApp" ? <Header /> : null}</div>

      
      <div className="w-full max-w-2xl mx-auto h-screen overflow-auto bg-white rounded-lg shadow-lg">
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Quiz Results</h1>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {score} / {questions.length}
            </div>
            <div className="text-gray-600">Your Score</div>
          </div>
          
          <div className="mb-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question Review</h2>
            <div className="space-y-3">
              {userAnswers.map((answer, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg ${
                    answer.timeUp ? 'bg-yellow-50' : 
                    answer.isCorrect ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <div className="font-medium">Q{index + 1}: {answer.question}</div>
                  {answer.timeUp ? (
                    <div className="text-yellow-700">Not answered! Correct answer: {answer.correctAnswer}</div>
                  ) : answer.isCorrect ? (
                    <div className="text-green-700">Your answer: {answer.userAnswer} (Correct)</div>
                  ) : (
                    <>
                      <div className="text-red-700">Your answer: {answer.userAnswer}</div>
                      <div className="text-green-700">Correct answer: {answer.correctAnswer}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={restartQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Restart Quiz
          </button>
        </div>
      </div>
      </>

    );
  }
};

export default QuizApp;