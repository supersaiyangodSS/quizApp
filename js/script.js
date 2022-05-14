let questions = [
    {
        'question': 'which of the follwing is the web browser?',
        'a': 'Facebook',
        'b': 'Instagram',
        'c': 'Brave',
        'd': 'YouTube',
        'answer': 'c'
    },
    {
        'question': 'Which of the following is the programming language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JSON',
        'd': 'Rust',
        'answer': 'd'
    },
    {
        'question': 'How to define variable in javascript?',
        'a': 'var variableName;',
        'b': '$variableName;',
        'c': 'int variableName;',
        'd': 'variableName;',
        'answer': 'a'
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