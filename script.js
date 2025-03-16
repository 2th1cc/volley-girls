const questions = [
    "Ты девушка? 💖",
    "Ты являетешься участницей волейбольной сборной? 🏐",
    "Ты любишь пацанов сборной? 🏐💖"
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageElement = document.getElementById('message');

function showQuestion() {
    questionElement.textContent = questions[currentQuestion];
    messageElement.textContent = ""; 
}

yesBtn.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        
        messageElement.textContent = "Ура! Ты прошла опрос! 🎉 Жди приглашение на наш волейбольный сбор в честь 8 марта! 💌🏐";
        

        questionElement.style.display = "none";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
});

noBtn.addEventListener('click', () => {
    messageElement.textContent = "Фейл! 😢 Давай попробуем еще раз! 💖";
    
    setTimeout(() => {
        currentQuestion = 0; 
        showQuestion(); 
    }, 1000); 
});

showQuestion(); 