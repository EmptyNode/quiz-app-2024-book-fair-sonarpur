let selectedLanguage = "";
let selectedAgeGroup = "";
let currentQuestions = [];

var questions = [];

console.log("Script loaded");

function selectLanguage(language) {
  selectedLanguage = language;
  document.querySelector(".language-select").classList.remove("active");
  document.querySelector(".age-select").classList.add("active");

  if (language === "english") {
    document.getElementById("age-english").style.display = "block";
    document.getElementById("age-bengali").style.display = "none";
    updateInfoBox("english");
    updateQuizBox("english");
    updateResultBox("english");
    document.querySelector(".start_btn h1").textContent = "Agriculture Quiz";
    document.querySelector(".start_btn button").textContent = "Start Quiz";
  } else {
    document.getElementById("age-english").style.display = "none";
    document.getElementById("age-bengali").style.display = "block";
  }
}

function selectAgeGroup(ageGroup) {
  selectedAgeGroup = ageGroup;

  // Select appropriate question array based on language and age group
  if (selectedLanguage === "english") {
    switch (selectedAgeGroup) {
      case "under8":
        currentQuestions = question1;
        questions = question1;
        initializeQuiz(questions);
        break;
      case "under12":
        currentQuestions = question2;
        questions = question2;
        initializeQuiz(questions);
        break;
      case "under18":
        currentQuestions = question3;
        questions = question3;
        initializeQuiz(questions);
        break;
      case "forAll":
        currentQuestions = question4;
        questions = question4;
        initializeQuiz(questions);
        break;
    }
  } else {
    switch (selectedAgeGroup) {
      case "under8":
        currentQuestions = question5;
        questions = question5;
        initializeQuiz(questions);
        break;
      case "under12":
        currentQuestions = question6;
        questions = question6;
        initializeQuiz(questions);
        break;
      case "under18":
        currentQuestions = question7;
        questions = question7;
        initializeQuiz(questions);
        break;
      case "forAll":
        currentQuestions = question8;
        questions = question8;
        initializeQuiz(questions);
        break;
    }
  }

  // Hide age selection and show info box
  document.querySelector(".age-select").classList.remove("active");
  document.querySelector(".info_box").classList.add("activeInfo");

  // Initialize quiz with selected questions
  // initializeQuiz(currentQuestions);
}

function updateUILanguage() {
  const texts = {
    english: {
      rules: "Quiz Rules",
      timeRule: "You will have 15 seconds per question.",
      answerRule: "Once you select your answer, it can't be undone.",
      timeoutRule: "You can't select any option once time goes off.",
      exitRule: "You can't exit from the quiz while you're playing.",
      scoreRule: "You'll get points on the basis of your correct answers.",
      startBtn: "Start Quiz",
      exitBtn: "Exit Quiz",
      nextBtn: "Next Question",
      timeLeft: "Time Left",
      complete: "You've completed the Quiz!",
      // Add more text elements as needed
    },
    bengali: {
      rules: "কুইজের নিয়মাবলী",
      timeRule: "প্রতি প্রশ্নে আপনি পাবেন ১৫ সেকেন্ড।",
      answerRule: "একবার আপনি আপনার উত্তর বেছে নিলে, তা ফিরে যেতে পারবে না।",
      timeoutRule: "সময় শেষ হলে আপনি কোনও অপশন বেছে নিতে পারবেন না।",
      exitRule: "খেলা চলাকালীন সময়ে আপনি কুইজ থেকে বাহির হতে পারবেন না।",
      scoreRule: "আপনি আপনার সঠিক উত্তরের ভিত্তিতে পয়েন্ট পাবেন।",
      startBtn: "কুইজ শুরু করুন",
      exitBtn: "বাহির হোন",
      nextBtn: "পরবর্তী প্রশ্ন",
      timeLeft: "অবশিষ্ট সময়",
      complete: "আপনি কুইজটি সম্পন্ন করেছেন!",
      // Add more text elements as needed
    },
  };

  //   const languageTexts = texts[selectedLanguage];
  // Update all text elements in the UI
  // You'll need to add code here to update all your UI elements
  // based on the selected language
}

// Update the info box content based on language
function updateInfoBox(language) {
  const infoTitle = document.querySelector(".info-title span");
  const infoList = document.querySelector(".info-list").children;
  const buttons = document.querySelector(".info_box .buttons");

  if (language === "english") {
    infoTitle.textContent = "Some Rules of this Quiz";
    infoList[0].innerHTML =
      "1. You will have <span>15 seconds</span> per question.";
    infoList[1].innerHTML =
      "2. Once you select your answer, it can't be undone.";
    infoList[2].innerHTML =
      "3. You can't select any option once time goes off.";
    infoList[3].innerHTML = "4. You can't exit from the Quiz while playing.";
    infoList[4].innerHTML =
      "5. You'll get points based on your correct answers.";

    buttons.querySelector(".quit").textContent = "Exit Quiz";
    buttons.querySelector(".restart").textContent = "Continue";
  }
}

// Update quiz box content based on language
function updateQuizBox(language) {
  const quizBox = document.querySelector(".quiz_box");
  const timeLeftTxt = quizBox.querySelector(".time_left_txt");
  const nextBtn = quizBox.querySelector(".next_btn");

  if (language === "english") {
    quizBox.querySelector(".title").textContent = "Quiz Competition";
    timeLeftTxt.textContent = "Time Left";
    nextBtn.textContent = "Next Question";
  }
}
function updateResultBox(language) {
  const resultBox = document.querySelector(".result_box");
  const completeText = resultBox.querySelector(".complete_text");
  const buttons = resultBox.querySelector(".buttons");

  if (language === "english") {
    completeText.textContent = "You've completed the Quiz!";
    buttons.querySelector(".quit").textContent = "Exit";
  }
}
function initializeQuiz(questions) {
  // Your existing quiz initialization code
  // Use the questions parameter instead of your original questions array
  questions = shuffleArray(
    questions.map((question) => ({
      ...question,
      options: shuffleArray(question.options),
      answer: question.answer,
    }))
  );
  questions = questions.slice(0, 5);
  // alert("Quiz initialized with " + questions.length + " questions");

  // ... rest of your initialization code

  //selecting all required elements
  const start_btn = document.querySelector(".start_btn button");
  const info_box = document.querySelector(".info_box");
  const exit_btn = info_box.querySelector(".buttons .quit");
  const continue_btn = info_box.querySelector(".buttons .restart");
  const quiz_box = document.querySelector(".quiz_box");
  const result_box = document.querySelector(".result_box");
  const option_list = document.querySelector(".option_list");
  const time_line = document.querySelector("header .time_line");
  const timeText = document.querySelector(".timer .time_left_txt");
  const timeCount = document.querySelector(".timer .timer_sec");

  // if startQuiz button clicked
  start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
  };

  // if exitQuiz button clicked
  exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
  };

  // if continueQuiz button clicked
  continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
  };

  let timeValue = 15;
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter;
  let counterLine;
  let widthValue = 0;

  const restart_quiz = result_box.querySelector(".buttons .restart");
  const quit_quiz = result_box.querySelector(".buttons .quit");

  // if restartQuiz button clicked
  restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;

    // Shuffle the questions array
    questions = shuffleArray(questions);

    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "অবশিষ্ট সময়"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  };

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // if quitQuiz button clicked
  quit_quiz.onclick = () => {
    window.location.href = "index1.html";
  };

  const next_btn = document.querySelector("footer .next_btn");
  const bottom_ques_counter = document.querySelector("footer .total_que");

  // if Next Que button clicked
  next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
      // alert(questions.length);
      //if question count is less than total question length
      que_count++; //increment the que_count value
      que_numb++; //increment the que_numb value
      showQuetions(que_count); //calling showQestions function
      queCounter(que_numb); //passing que_numb value to queCounter
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      startTimer(timeValue); //calling startTimer function
      startTimerLine(widthValue); //calling startTimerLine function
      timeText.textContent = "অবশিষ্ট সময়"; //change the timeText to Time Left
      next_btn.classList.remove("show"); //hide the next button
    } else {
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      showResult(); //calling showResult function
    }
  };

  // getting questions and options from array
  // getting questions and options from array
  function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    const que_image1 = document.querySelector(".que_image1");
    const que_image2 = document.querySelector(".que_image2");
    const que_image3 = document.querySelector(".que_image3");
    const que_image4 = document.querySelector(".que_image4");
    const option_list = document.querySelector(".option_list");
    // alert(questions.length);

    let i = 1;
    let que_tag =
      "<span>" +
      convertToBengaliNumber(index + 1) +
      ". " +
      questions[index].question +
      "</span>";
    let option_tag =
      '<div class="option"><span>' +
      questions[index].options[0] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[1] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[2] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[3] +
      "</span></div>";

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    if (questions[index].image) {
      let image_tag1 =
        '<img src="' + questions[index].image + '" alt="Question Image">';
      let image_tag2 = "";
      let image_tag3 = "";
      let image_tag4 = "";
      if (questions[index].question === "এই গুলির মধ্যে কোনটি মিলেট?") {
        image_tag2 = '<img src="js/images/65b.jpg" alt="Additional Image 1">';
        image_tag3 = '<img src="js/images/65c.jpg" alt="Additional Image 2">';
        image_tag4 = '<img src="js/images/65d.jpg" alt="Additional Image 3">';
      }
      que_image1.innerHTML = image_tag1;
      que_image2.innerHTML = image_tag2;
      que_image3.innerHTML = image_tag3;
      que_image4.innerHTML = image_tag4;
    } else {
      que_image1.innerHTML = ""; // Clear image container if no image is present
      que_image2.innerHTML = "";
      que_image3.innerHTML = "";
      que_image4.innerHTML = "";
    }

    const options = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < options.length; i++) {
      options[i].addEventListener("click", function () {
        optionSelected(this);
      });
    }
  }

  // creating the new div tags which for icons
  let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
  let crossIconTag =
    '<div class="icon cross"><i class="fas fa-times"></i></div>';

  //if user clicked on option
  function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    console.log(questions);
    console.log(userAns + "==" + correcAns);
    if (userAns == correcAns) {
      //if user selected option is equal to array's correct answer
      userScore += 1; //upgrading score value with 1
      answer.classList.add("correct"); //adding green color to correct selected option
      answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
      const correctSound = document.getElementById("correctSound");
      correctSound.play();
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
    } else {
      answer.classList.add("incorrect"); //adding red color to correct selected option
      answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
      const correctSound = document.getElementById("wrongSound");
      correctSound.play();
      console.log("Wrong Answer");

      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Auto selected correct answer.");
        }
      }
    }
    for (i = 0; i < allOptions; i++) {
      option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
  }

  // function showResult(){
  //     info_box.classList.remove("activeInfo"); //hide info box
  //     quiz_box.classList.remove("activeQuiz"); //hide quiz box
  //     result_box.classList.add("activeResult"); //show result box
  //     const scoreText = result_box.querySelector(".score_text");
  //     if (userScore > 3){ // if user scored more than 3
  //         //creating a new span tag and passing the user score number and total question number
  //         let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
  //         scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
  //     }
  //     else if(userScore > 1){ // if user scored more than 1
  //         let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
  //         scoreText.innerHTML = scoreTag;
  //     }
  //     else{ // if user scored less than 1
  //         let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
  //         scoreText.innerHTML = scoreTag;
  //     }
  // }

  function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");

    if (selectedLanguage === "english") {
      let scoreTag =
        "<span>You got <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p> questions</span>";
      scoreText.innerHTML = scoreTag;
    } else {
      let scoreTag =
        "<span> <p> " +
        convertToBengaliNumber(questions.length) +
        " </p> টি  প্রশ্নের মধ্যে আপনি <p>" +
        convertToBengaliNumber(userScore) +
        "</p> পেয়েছেন </span>";
      scoreText.innerHTML = scoreTag;
    }

    const endSound = document.getElementById("endSound");
    if (userScore > 3) {
      endSound.src = "js/images/endvictory.mp3";
    } else {
      endSound.src = "js/images/endloss.mp3";
    }
    endSound.play();
  }

  function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
      if (selectedLanguage === "english") {
        timeCount.textContent = time;
        if (time < 9) {
          timeCount.textContent = "0" + time;
        }
        if (time < 0) {
          clearInterval(counter);
          timeText.textContent = "Time Off";
          showCorrectAnswer();
        }
      } else {
        timeCount.textContent = convertToBengaliNumber(time);
        if (time < 9) {
          timeCount.textContent = "০" + convertToBengaliNumber(time);
        }
        if (time < 0) {
          clearInterval(counter);
          timeText.textContent = "সময় সমাপ্ত";
          showCorrectAnswer();
        }
      }
      time--;
    }
  }

  function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
      time += 1; //upgrading time value with 1
      time_line.style.width = time + "px"; //increasing width of time_line with px by time value
      if (time > 549) {
        //if time value is greater than 549
        clearInterval(counterLine); //clear counterLine
      }
    }
  }

  var x = 4;
  function queCounter(index) {
    const bottom_ques_counter = document.querySelector("footer .total_que");
    if (selectedLanguage === "english") {
      let totalQueCounTag =
        "<span><p>Remaining Questions - " + x + "</p></span>";
      bottom_ques_counter.innerHTML = totalQueCounTag;
    } else {
      let totalQueCounTag =
        "<span><p>অবশিষ্ট প্রশ্ন সংখ্যা " +
        "-" +
        convertToBengaliNumber(x) +
        "</p></span>";
      bottom_ques_counter.innerHTML = totalQueCounTag;
    }
    x--;
  }

  function convertToBengaliNumber(number) {
    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    // Convert each digit in the number
    const bengaliNumber = number
      .toString()
      .split("")
      .map((digit) =>
        englishNumbers.includes(digit)
          ? bengaliNumbers[englishNumbers.indexOf(digit)]
          : digit
      )
      .join("");

    return bengaliNumber;
  }
}
