//input modifiers to set up skills

//creates skills with 5 skill points (for input modifier) 
const modifier = (text) => {    
    state.skills = {'turtle':1}
    state.skillPoints = 5
    state.disableRandomSkill = true
    return ({text})
  }
  
  // Don't modify this part
  modifier(text)
  