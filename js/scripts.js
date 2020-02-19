// let thumb = $('#item').getAttr("data-caption").toLowercase();
// let search = $('input').value().toLowercase();

// function filter(){
//     for (let i=0, i<thumb.length, i+=1){
//         thumb = thumb[i];
//         if (search =/= thumb){
//             $(this).attr("style", "display: hidden");
//         } 
//     }
// }

/* Search Code */

let search = document.getElementById('search');
let a = document.getElementsByClassName('item');

search.addEventListener('keyup', () => {
    const input = search.value.toLowerCase();

    for (let i = 0; i < a.length; i += 1) {
        const attrData = a[i].getAttribute('data-caption');
        if (attrData.toLowerCase().indexOf(input) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
    }
});

search.addEventListener('search', () => {
    if (event.target.value === '') {
      for (let i = 0; i < a.length; i += 1) {
        a[i].style.display = "";
      }
    }
  });