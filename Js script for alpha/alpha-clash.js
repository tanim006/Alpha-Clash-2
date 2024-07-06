// function play(){
//     // Remove the hidden word from the class list : Step - 1
//     const HomeScreen = document.getElementById('Home-Screen')
//     HomeScreen.classList.add('hidden')
//     // Add the hidden word in the class list : Step-2
//     const GameScreen = document.getElementById('Game-Screen')
//     GameScreen.classList.remove('hidden')
// }



// We can do this with another way like recursion 

function play(){
    RemoveElements('Score-Screen')
    RemoveElements('Home-Screen')
    AddElements('Game-Screen')
    SetTextElementById('Current-Life',5)
    SetTextElementById('Current-Score',0)
    ContinueGame()
}

function ContinueGame(){
    const alphabet = RandomAlphabet()
    console.log( 'Your Random Alphabet is ',alphabet)
    // set the current alphabet in the ux file or show the the current alphabet while it's changing with randomly
    const currentAlphabet = document.getElementById('Current-Alphabet')
    currentAlphabet.innerText = alphabet

    SetBackGroundColor(alphabet)
}
//  check either the player pressed and the showed alphabet is same or not 

function KeyboardEvent(event){
    // check ehat player has pressed
    const PlayerPressed =event.key
    if(PlayerPressed=== 'Escape'){
        GameOver()
    }


    const currentAlphabet = document.getElementById('Current-Alphabet')
    const currentAlphabetInnerText = currentAlphabet.innerText
    const ChangedCurrentAlphabet = currentAlphabetInnerText.toLowerCase()
    console.log(ChangedCurrentAlphabet)

    if(PlayerPressed===ChangedCurrentAlphabet){
        // find the score 
        const CurrentScore = document.getElementById('Current-Score')
        const CurrentScoreInnerText = CurrentScore.innerText
        const CurrentScoreRound = parseInt(CurrentScoreInnerText) 

        // add point to the score 
        const NewScore = CurrentScoreRound + 1

        // show the updated score 
        CurrentScore.innerText = NewScore



        RemoveBackGroundColor(ChangedCurrentAlphabet)
        ContinueGame()

    }
    else{
        console.log('wrong')
        //find the Life

        const CurrentLife = document.getElementById('Current-Life')
        const CurrentLifeInnerText = CurrentLife.innerText
        const CurrentLifeRound = parseInt(CurrentLifeInnerText)

        // remove life from the chance 

        const RemainLife = CurrentLifeRound - 1

        // show the updated life 

        CurrentLife.innerText = RemainLife

        if(RemainLife===0){
            GameOver()
        }

      
    }

}
function GameOver(){
    RemoveElements('Game-Screen')
    AddElements('Score-Screen')

    const score = GetValueByElementsId('Current-Score')
    SetTextElementById('Game-Score',score)

    const removeHighlight = GetTextVByElementsId('Current-Alphabet')
    RemoveBackGroundColor(removeHighlight)
    
}



document.addEventListener('keyup',KeyboardEvent)

