var acc = document.getElementsByClassName("card__content__list__title");
var elements=document.getElementsByClassName("card__content__list");
var i;
var panel;

var list=document.querySelectorAll(".card__content__list");

// alert(acc);
console.log("hello");
console.log(document);
console.log(acc);



// console.log("Panel:"+panel);
// elements.forEach(element => {
//     element.addEventListener("click", () => {
//         element.classList.toggle("active");
//         console.log("print");
        
//     });
// });


console.log(elements);


// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
    
    
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//     // if(panel.style.maxHeight!=="0px"){
//     //     panel.style.maxHeight="0px";
//     // }
//     // else{
//     //     // panel.style.maxHeight=panel.scrollHeight+"px";
//     //     panel.style.maxHeight =" 90px";
//     // }
//   });
// } 


for (j=0;j<list.length;j++){
    list[j].addEventListener("click",function toggle() {
        this.classList.toggle("active");
        
    })

};
