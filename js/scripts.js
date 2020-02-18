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

const searchString = document.getElementById('search');
const a = document.getElementsByClassName('item');

searchString.addEventListener('keyup', () => {
    const input = searchString.value.toLowerCase();

    for (let i = 0; i < a.length; i += 1) {
        const attrData = a[i].getAttribute('data-caption');
        if (attrData.toLowerCase().indexOf(input) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
    }
});

searchString.addEventListener('search', () => {
    if (event.target.value === '') {
      for (let i = 0; i < a.length; i += 1) {
        a[i].style.display = "";
      }
    }
  });