/*
/*****************************/
/***Set From Previous State***/
/*****************************/
/*
In the previous exercise, we learned to update the state by passing it a new value like this:
*/
setState(newStateValue);
/*
However, React state updates are asynchronous. This means that there are some scenarios where portions of your code will run before the state is finished updating.

This is a good and a bad thing! Grouping the state updates together can improve performance in your application, but it can result in outdated state values. Consequently, it is best practice to update a state with a callback function, preventing accidental outdated values.

Let’s take a look at the following code to see how it’s done:
*/
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
/*
When the button is pressed, the increment() event handler is called. Inside this function, we use our setCount() state setter with a callback function.

Because the next value of count depends on the previous value of count, we pass a callback function as the argument for setCount() instead of a value (as we’ve done in previous exercises).
*/
setCount((prevCount) => prevCount + 1);
/*
When our state setter calls the callback function, this state setter callback function takes our previous count as an argument. The value returned by this state setter callback function is used as the next value of count (in this case, prevCount + 1).

We can also just call setCount(count +1) and it would work the same in this example, but for reasons that are out of scope for this lesson, it is safer to use the callback method.

/******************/
/***Instructions***/
/******************/
/*
1. Let’s get some practice by creating a navigation bar for a quiz. The navigation bar will let us go back or go to the next question in a quiz.

First, define a goBack() event handler function. It should allow us to navigate to the previous quiz question. Because our next value of state depends on the previous state value, this function should call the state setter with a callback function. Our state setter callback function needs to compute the next value of questionIndex using an argument named prevQuestionIndex.

2. Next, add an event listener to the “Go Back” button that will call our newly defined event handler.

3. If we can go back to a previous question, we should also be able to go to the next question.

Define a goToNext() event handler. Because our next value of state depends on the previous state value, this function should call the state setter with a callback function. Our state setter callback function needs to compute the next value of questionIndex using an argument named prevQuestionIndex.

4. Add an event listener to the “Next Question” button that will call our newly defined event handler.

5. Lastly, add an onFirstQuestion variable with a boolean value, then use that value to toggle the disabled attribute of the “Go Back” button on and off.
*/

/*QuizNavBar.js*/

import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 

  // determine if on the first question or not 

  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button>
          Go Back
        </button>
        <button disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

/*dataModal.js*/

export const questions = [
    {
      id: 123,
      prompt: "What two things can you never eat for breakfast?",
      answer: "Lunch and dinner"
    },
    {
      id: 124,
      prompt: "What word is spelled incorrectly in every single dictionary?",
      answer: "Incorrectly"
    },
    {
      id: 125,
      prompt:
        "What do you answer every day, even though it never asks you a question?",
      answer: "Your phone"
    },
    {
      id: 126,
      prompt:
        "What starts with “e” and ends with “e” but only has one letter in it?",
      answer: "An envelope."
    },
    {
      id: 127,
      prompt: "What has a face and two hands, but no arms or legs?",
      answer: "A clock"
    }
  ];
  
  // Shout out to [Thought Catalog](https://thoughtcatalog.com/january-nelson/2018/03/65-riddles-for-kids-guaranteed-to-stump-you-too/) for these important questions :)
  

/*App.js*/

import React from "react";
import QuizNavBar from "./QuizNavBar";
import { questions } from "./dataModel";

export default function App() {
  return <QuizNavBar questions={questions} />;
}

/*index.js*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(
  document.querySelector("#app")
).render(<App />)


/*index.html*/

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="./styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <main id="app">
  </main>
<script src="https://content.codecademy.com/courses/React/react-18-course-bundle.min.js"></script>
  <script src="/index.compiled.js"></script>
</body>

</html>

/*style.css*/
html, body {
	height: 100%;
  background-color: #ffffff;
  text-align: center;
  margin: 0;
}

* {
	font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

#app {
	position: relative;
	height: 100%;
	width: 100%;
	padding: 8px;
}

nav {
  display: flex;
  justify-content: space-between;
}
