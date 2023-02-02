

let isMonth = true;
function toggleFunction(){
    isMonth = !isMonth;
    if(isMonth === true){
        document.getElementById("tag-month-toggle").style.color = "#4c4d5f";
        document.getElementById("tag-year-toggle").style.color = "#e8e2e2";
    } else {
        document.getElementById("tag-month-toggle").style.color = "#e8e2e2";
        document.getElementById("tag-year-toggle").style.color = "#4c4d5f";
    }
}
