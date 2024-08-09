// exam.js

document.addEventListener("DOMContentLoaded", () => {
    const questionsContainer = document.getElementById("questions-container");

    // Example questions (you would fetch these from your .NET backend)
    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswer: "Paris"
        },
        {
            id: 2,
            question: "Which language is primarily used for web development?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correctAnswer: "JavaScript"
        },
        // Add more questions here...
    ];

    // Load questions into the form
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionLabel = document.createElement("label");
        questionLabel.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionLabel);

        q.options.forEach(option => {
            const optionLabel = document.createElement("label");
            optionLabel.textContent = option;

            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${q.id}`;
            optionInput.value = option;

            optionLabel.prepend(optionInput);
            questionDiv.appendChild(optionLabel);
        });

        questionsContainer.appendChild(questionDiv);
    });

    // Handle form submission
    document.getElementById("exam-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let score = 0;

        questions.forEach(q => {
            const userAnswer = document.querySelector(`input[name="question${q.id}"]:checked`);
            if (userAnswer && userAnswer.value === q.correctAnswer) {
                score++;
            }
        });

        // Redirect to result page with the score (this would be handled on the server in a real app)
        window.location.href = `result.html?score=${score}&total=${questions.length}`;
    });
});
