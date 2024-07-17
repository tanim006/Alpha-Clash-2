function RemoveElements(ElementId){
    const Elements = document.getElementById(ElementId)
    Elements.classList.add('hidden')
}
function AddElements(ElementId){
    const Elements = document.getElementById(ElementId)
    Elements.classList.remove('hidden')
}
function RandomAlphabet(){
    // create an array to of all the alphabets 
    const AlphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const SplitAlphabet = AlphabetString.split('')
    // console.log(AlphabetString)
    // generate a random number from 0 to 25 because the there are 26 letters 

    const RandomNumber = Math.random()*25
    const number = Math.round(RandomNumber)
    console.log(number)

    const alphabet = SplitAlphabet[number]

    
    return alphabet
}

function SetBackGroundColor(ElementId){
    const Elements = document.getElementById(ElementId)
    Elements.classList.add('bg-orange-400')

}
function RemoveBackGroundColor(ElementId){
    const Elements = document.getElementById(ElementId)
    Elements.classList.remove('bg-orange-400');

}

function SetTextElementById (ElementId,value){
    const Element = document.getElementById(ElementId)
    Element.innerText = value
}
function GetValueByElementsId (ElementId){
    const element = document.getElementById(ElementId)
    const value = element.innerText
    return value;
}
function GetTextVByElementsId (elemetsid){
    const texts = document.getElementById(elemetsid)
    const Text = texts.innerText
    return Text;
}

function doAnimation (ElementId){
    const element = document.getElementById(ElementId)
    element.classList.add('animate-bounce')
}
function removeAnimation (ElementId){
    const element = document.getElementById(ElementId)
    element.classList.remove('animate-bounce')
}