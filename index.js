let RandomQuoteUrl = `https://freequote.herokuapp.com/`
let h2  =  document.querySelector('h2')
let textArea  =  document.querySelector('textarea')


function fetchQuote(){
 return fetch(RandomQuoteUrl).
then((response)=>response.json()).
then((data)=>{
return data.quote}).catch((err)=>console.log(err))
}

async function getQuote(){
const quote = await fetchQuote()
quote.split('').forEach((character)=>{
  let characterSpan = document.createElement('span')
  characterSpan.innerHTML = character
  h2.appendChild(characterSpan)
})
}
getQuote()

textArea.addEventListener('input',changedHandler)
let inside = ''
function changedHandler(e){
  let typed = e.target.value.split('')

  
  let index = typed.length-1
  if(index===-1){
    index = 0
  }
  
  let currentSpan = h2.children[index]
  let currentSpanContent = h2.children[index].textContent
  
   if(typed[index]===null){
      currentSpan.classList.remove('red')
      currentSpan.classList.remove('green')
  }else if(typed[index]==currentSpanContent){
       currentSpan.classList.remove('red')
       currentSpan.classList.add('green')
       if(typed.length === h2.children.length){
         h2.innerHTML = ""
         e.target.value = null
           getQuote()
       }
  }else{
      currentSpan.classList.remove('green')
      currentSpan.classList.add('red')
  }
}









  
