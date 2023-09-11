const hourHand = document.querySelector('.hour-hand')
const minitesHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    secondDegrees = ((seconds / 60) * 360) + 90;    
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minites = now.getMinutes();
    minitesDegrees = ((minites / 60) * 360) + 90;  
    minitesHand.style.transform = `rotate(${minitesDegrees}deg)`;

    const hours = now.getHours();
    hoursDegrees = ((hours / 12) * 360) + 90;  
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // console.log(secondDegrees);
}
setInterval(setDate, 1000);