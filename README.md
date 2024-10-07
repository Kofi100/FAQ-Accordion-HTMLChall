# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript




### What I learned

This project helped revise on using css,html stuff I learnt about (flex,grid,BEM naming convection etc.) and also gave me an opportunity to study a bit of JavaScript


To see how you can add code snippets, see below:

```js
<script>
  var list=document.querySelectorAll(".card__content__list");

  for (j=0;j<list.length;j++){
    list[j].addEventListener("click",function toggle() {
        this.classList.toggle("active");
        
    })

};
</script>
// this code was meant to find elements with  class "card__content__list"
// and connect them all to a function through an EventListener using a loop
// in order to add and remove the class "active" from them.
```
```css

/* text in  .card__content__list__text get hidden at the beginning of the webpage*/
.card__content__list__text{
    /* display: none; */
    height: 0;
    /* max-height: 0; */
    overflow: hidden;
    transition: all 0.3s;
}
/* and gets revealed by changing its height to 16*5 px when its  .*/
/* parent container .card__content__list gets the  .active class toggled in it. */
.card__content__list.active .card__content__list__text{
    /* display: flex; */
    /* height:auto; */
    height: 5rem;
    overflow: scroll;
}
/* when the parent container gets active,the img meant to represent the list */
/* would be turned to a minus sign. */
.card__content__list.active .card__content__list__title img{
    content:url("assets/images/icon-minus.svg");
    /* used to change image sources for examples. */
    /* border: thin solid #000; */
}

/* this changes the cursor to a hand -pointing cursor(often used for links.) */
.active, .card__content__list__title:hover {
    /* background-color: var(--Light-pink); */
    cursor:pointer;
  }

  
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
