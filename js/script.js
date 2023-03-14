let questions = [
    {
    question: "What is the name of the world's largest reef system?",
    a: "Great Barrier Reef",
    b: "Coral Triangle",
    c: "Belize Barrier Reef",
    d: "Mesoamerican Reef",
    answer: "a",
  },
  {
    question: "What is the world's largest landlocked country?",
    a: "Kazakhstan",
    b: "Mongolia",
    c: "Paraguay",
    d: "Bolivia",
    answer: "a",
  },
  {
    question: "Who discovered penicillin?",
    a: "Alexander Fleming",
    b: "Marie Curie",
    c: "Louis Pasteur",
    d: "Albert Einstein",
    answer: "a",
  },
  {
    question: "What is the capital of Brazil?",
    a: "São Paulo",
    b: "Rio de Janeiro",
    c: "Brasília",
    d: "Salvador",
    answer: "c",
  },
  {
    question: "What is the smallest planet in our solar system?",
    a: "Mars",
    b: "Mercury",
    c: "Venus",
    d: "Neptune",
    answer: "b",
  },
  {
    question:
      "What is the name of the fictional detective created by Arthur Conan Doyle?",
    a: "Hercule Poirot",
    b: "Sam Spade",
    c: "Sherlock Holmes",
    d: "Philip Marlowe",
    answer: "c",
  },
  {
    question: "What is the largest country in Africa?",
    a: "South Africa",
    b: "Nigeria",
    c: "Egypt",
    d: "Algeria",
    answer: "d",
  },
  {
    question: "What is the name of the highest peak in North America?",
    a: "Mount Denali",
    b: "Mount Rainier",
    c: "Mount Whitney",
    d: "Mount Shasta",
    answer: "a",
  },
  {
    question: "What is the name of the longest river in South America?",
    a: "Amazon River",
    b: "Orinoco River",
    c: "Paraguay River",
    d: "Magdalena River",
    answer: "a",
  },
  {
    question: "Who is the author of the Harry Potter series?",
    a: "J.K. Rowling",
    b: "Stephenie Meyer",
    c: "Suzanne Collins",
    d: "George R.R. Martin",
    answer: "a",
  }
];

var index = 0;

var total = questions.length,
    right = 0,
    wrong = 0;

let questionBox = document.getElementById('question-box');
let options = document.querySelectorAll('.option');
let wrapper = document.getElementById('wrapper');
var labels = document.querySelectorAll('label');
var submitBtn = document.getElementById('submit');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    var data = questions[index]; // getting question number/index
    questionBox.innerText = ` ${index + 1}) ${data.question}`; // displaying questions on DOM
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}


options.forEach((option) => {
    option.addEventListener('click', () => {
        if(option.checked) {
            submitBtn.classList.remove('disable');
            submitBtn.classList.add('success');
        }
    })
})


const submitAns = ()  => {
    let data = questions[index];
    const ans = getAnswer();
    if (ans ==  data.answer) { // checks the answer with Array Object
        right++; // adds +1 value if match
    } else {
        wrong++; // add +1 value if doesn't match
    }
    index++;
    loadQuestion();
    submitBtn.classList.add('disable');
    submitBtn.classList.remove('success');
    submit();
    return;
}

const getAnswer = () => { //tells which option is selected
    let gotAns;
    options.forEach((option) => {
        if(option.checked) { //checks if the input is checked or not
            gotAns =  option.value;//stores value for all input tags
        }
    });
    return gotAns; //returns value for all input tags to the function
}

const endQuiz = () => {
    wrapper.innerHTML = `
        <h3> Thank You For Playing The Quiz </h3>
        <h4> ${right} / ${total} are correct </h4> 
        <button class="dy button" onclick="restart()"> Restart Quiz </button>
    `; // Ends the quiz and shows the result
}

const reset = () => {
    options.forEach((option) => {
        option.checked = false; // resets all radio buttons
    });
}

const restart = () => {
    window.location.reload("refresh");
}

const submit = () => {
        if(index == total-1) {
            submitBtn.innerHTML = 'Submit';
        }
    }

// initial call for 1 time auto run on reload/load.
loadQuestion();
