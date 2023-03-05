const question = document.querySelectorAll(".question");


for(let i = 0 ; i < question.length; i++ ){
    question[i].addEventListener('click', function (event){
        let curentDiv = event.currentTarget;
        const active = document.querySelector(".active");
        curentDiv.classList.toggle ("active");
        active?.classList.remove("active");
    });
}