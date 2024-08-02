function block(event){
    var image = document.querySelector(".image")
  image.remove() 

  var blockText = document.querySelector('h3')
  blockText.style.display = "block"
  blockText.innerHTML = "Blocked"
  
  
}

function follow(event){
    
  var blockText = document.querySelector('h3')
  blockText.style.display = "block"
  blockText.innerHTML = "Followed"
  
  var buttonOne = document.querySelector('.btn1')
  var buttonTwo = document.querySelector('.btn2')
  buttonOne.remove()
  buttonTwo.remove()
   
  var buttonThree = document.querySelector('.btn3')
  buttonThree.style.display = "block"
  buttonThree.innerHTML = "Message"
}