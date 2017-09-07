function getFormData() {

    const candidateInfo = document.querySelectorAll(".evaluation-form-header");
    const candidateInfoArr = [];
    const techLevel = document.querySelectorAll(".radioButtons");
    const techLevelArr = [];
    const comments = document.querySelectorAll(".evaluation-comments");
    const commentsArr = [];
    const evaluation = document.querySelectorAll(".evaluation-select");
    const evaluationArr = [];
    
    candidateInfo.forEach(function(el) {
        candidateInfoArr.push({
            name: el.name,
            value: el.value
        })
    });

    techLevel.forEach(function(el) {
        if(el.checked) {
            techLevelArr.push({
                name: el.name,
                value: el.value
            })
        }
    });

    comments.forEach(function(el) {
        commentsArr.push({
            name: el.name,
            value: el.value
        })
    });

    evaluation.forEach(function(el) {
        evaluationArr.push({
            name: el.name,
            value: el.value
        })
    });

    const formDataObj = {
        candidateInfo: candidateInfoArr,
        techLevel: techLevelArr,
        comments:commentsArr,
        evaluation: evaluationArr
    }

    var storedObj = localStorage.getItem("evaluationsData");
    if (JSON.parse(storedObj) === null) {
        let arr = [];
        arr.push(formDataObj);
        localStorage.setItem("evaluationsData", JSON.stringify(arr));
        console.log(arr);
    }
    else {
        let arr = JSON.parse(storedObj);
        arr.push(formDataObj);
        localStorage.setItem("evaluationsData", JSON.stringify(arr));
        console.log(arr);
        }
    
}  



    


