const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    function dataObj (candidate, interviewer, date, level, comments, evaluation) {
        this.candidate = candidate;
        this.interviewer = interviewer;
        this.date = date;
        this.level = level;
        this.comments = comments;
        this.evaluation = evaluation;
    }

    const candidate = document.getElementById("candidate");
    const interviewer = document.getElementById("interviewer");
    const date = document.getElementById("date");

    const level = document.getElementsByClassName("radioButtons");

    const levelArr = [];
    level.forEach(function(el) {
        levelArr.push(el.value);
    });

    const comments = document.getElementsByClassName("evaluation-comments");

    const commentsArr = [];
    comments.forEach(function(el) {
        commentsArr.push(el.value);
    });

    const evaluation = document.getElementsByClassName("evaluation-select");

    const evaluationArr = [];
    evaluation.forEach(function(el) {
        evaluationArr.push(el.value);
    });

    const newObj = new dataObj(candidate, interviewer, date, levelArr, commentsArr, evaluationArr);
})