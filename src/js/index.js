
require('../../src/css/style.scss')

;(()=>{
  "use strict"

  const greeting = (name = 'friend') => {
    return "Hello " + name + "!"
  }

  document.querySelector('body').innerText = greeting() // Pass an optional parameter into greeting()

})() // END IIFE
