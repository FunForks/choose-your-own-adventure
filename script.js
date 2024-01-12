let story
const props = {}


const textDiv = document.getElementById("text")
const actionDiv = document.getElementById("action")
const choicesDiv = document.getElementById("choices")
const divs = [ textDiv, actionDiv, choicesDiv ]


const clearPage = () => {
  let child
  divs.forEach ( div => {
    while (child = div.firstElementChild) {    
      div.removeChild(child)
    }  
  })
}


const insertSubstitutions = (paragraph, substitution) => {
  const insert = props[substitution]
  return paragraph.replace(/%s/g, insert)
}


const addParagraph = (paragraph) => {
  const p = document.createElement("p")
  p.textContent = paragraph
  textDiv.append(p)
}


const createText = (text, substitution) => {
  const paragraphs = text.split(/(\n)+/)

  paragraphs.forEach( paragraph => {
    if (substitution) {
      paragraph = insertSubstitutions(paragraph, substitution)  
    }

    switch (paragraph) {
      case "":
      case "\n":
      case "--**--**--**--**--":
        break
      default:
        addParagraph(paragraph)
    }
  })
}


const setName = (event, next) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  props.name = formData.get("name")
  showPage(next)
}


const enterName = (choices) => {
  const form = document.createElement("form")
  const { next } = choices[0]
  form.onsubmit = event => setName(event, next)

  const span = document.createElement("span")
  span.textContent = "What is your name?"

  const input = document.createElement("input")
  input.setAttribute("type", "text")
  input.setAttribute("name", "name")
  input.setAttribute("required", true)

  const button = document.createElement("button")
  button.setAttribute("type", "submit")
  button.textContent = "Set Name"

  form.appendChild(span)
  form.appendChild(input)
  form.appendChild(button)
  actionDiv.appendChild(form)
}


const showAction = (action, choices) => {
  switch (action) {
    case "enterName":
      return enterName(choices)
    case "steal":
      showChoices(choices)
      return props.guilty = true
  }
}


const showChoice = ({ text, next, guilty }) => {
  if ( guilty === false && props.guilty
    || guilty === true && !props.guilty
  ) {
    return
  }

  const button = document.createElement("button")
  button.textContent = text
  button.onclick = () => showPage(next)

  choicesDiv.appendChild(button)
}


const showChoices = choices => {
  // [ { text: <string>,
  //     next: <string key>,
  //     guilty: <undefined | boolean>
  //   }
  // ]
  if (!choices) {
    return showChoice({
      "text": "Play Again?",
      "next": "start"
    })
  }

  choices.forEach(showChoice)
}


const showPage = (page) => {
  const pageData = story[page]
  console.log("pageData:", pageData);
  
  clearPage()
  
  const { text, action, choices, substitution } = pageData

  createText(text, substitution)

  if (action) {
    showAction(action, choices)

  } else {
    showChoices(choices)
  }
}


;(async () => {
  try {
    const response = await fetch('./storyMap.json')
    story = await response.json()
    showPage("start")

  } catch (error) {
    console.log("Error in showPage");
  } 
})()


