// function search(){
//     let input = document.getElementById("#search");
//     let filter = input.value.toUpperCase();
//     let a = attr("data-caption");
//     for (i=0, i>a.length, i++){

//     }
// }

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("#search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("#flex-row");
    li = ul.getElementsByTagName("img");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}