document.getElementById("confirmClauseComplete")
.addEventListener("click", function(e){
    if( ! confirm("Yes, I have definitely completed this clause")){
        e.preventDefault();
    }
        else {
            alert("Yay, well done!")
        }
});