# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


### Screenshot

![](https://github.com/SohaibSEG/SohaibSEG.github.io/raw/master/challenges/advice-generator-app-main/screenshot.jpeg)


### Links

- Live Site URL: [github pages](https://SohaibSEG.github.io/challenges/advice-generator-app-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- javascript
- rest api


### What I learned

using fetch() api

```js
fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        
        id.textContent = `ADVICE #${data.slip.id}`;
        advice.textContent = data.slip.advice;
    
    
    });
```

### Useful resources

- [fetch() documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This is the offical documentation i used

