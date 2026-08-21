let popup = document.getElementById("popup");
        let emoji = document.getElementById("emoji");
        let moodTitle = document.getElementById("mood-title");
        let moodText = document.getElementById("mood-text");
        document.getElementById("Happy").onclick=function(){
            emoji.innerHTML="😊";
            moodTitle.innerHTML= "Happy";
            moodText.innerHTML = "Keep smiling! Spread your positive energy 🌟";
            popup.style.display = "flex";
        } 
        document.getElementById("Confident").onclick = function() {
        emoji.innerHTML = "😎";
        moodTitle.innerHTML = "Confident";
        moodText.innerHTML = "Believe in yourself. You are capable of amazing things 💪";
        popup.style.display = "flex";
    };

        document.getElementById("Sad").onclick = function() {
            emoji.innerHTML = "😔";
            moodTitle.innerHTML = "Sad";
    moodText.innerHTML = "It's okay to feel sad. Give yourself some time 💙";

    popup.style.display = "flex";
};

document.getElementById("Angry").onclick = function() {
    emoji.innerHTML = "😡";
    moodTitle.innerHTML = "Angry";
    moodText.innerHTML = "Take a deep breath and give yourself a moment to calm down 🧘";

    popup.style.display = "flex";
};
document.getElementById("Excited").onclick = function() {
    emoji.innerHTML = "🤩";
    moodTitle.innerHTML = "Excited";
    moodText.innerHTML = "Enjoy this energy! Something exciting might be waiting for you ✨";
    popup.style.display = "flex";
};
document.getElementById("Neutral").onclick = function() {
    emoji.innerHTML = "😐";
    moodTitle.innerHTML = "Neutral";
    moodText.innerHTML = "It's perfectly fine to simply feel okay. Take your time and enjoy the moment 🌿";
    popup.style.display = "flex";
};


document.getElementById("Bored").onclick = function() {
    emoji.innerHTML = "😒";
    moodTitle.innerHTML = "Bored";
    moodText.innerHTML = "Maybe it's time to try something new. A small change can make your day more interesting 🎨";
    popup.style.display = "flex";
};


document.getElementById("Frustrated").onclick = function() {
    emoji.innerHTML = "😤";
    moodTitle.innerHTML = "Frustrated";
    moodText.innerHTML = "Don't give up! Take a short break, breathe, and try again with a fresh mind 💪";
    popup.style.display = "flex";
};

document.getElementById("Celebratory").onclick = function() {
    emoji.innerHTML = "🥳";
    moodTitle.innerHTML = "Celebratory";
    moodText.innerHTML = "Celebrate your little victories! You deserve to enjoy the moment 🎉";
    popup.style.display = "flex";
};


document.getElementById("Tired").onclick = function() {
    emoji.innerHTML = "😴";
    moodTitle.innerHTML = "Tired";
    moodText.innerHTML = "It's okay to slow down. Rest is also a part of being productive 🌙";
    popup.style.display = "flex";
};


document.getElementById("Thoughtful").onclick = function() {
    emoji.innerHTML = "🤔";
    moodTitle.innerHTML = "Thoughtful";
    moodText.innerHTML = "Take some time to reflect. Sometimes your best ideas come from quiet moments 💭";
    popup.style.display = "flex";
};
document.getElementById("Romantic").onclick = function() {
    emoji.innerHTML = "🥰";
    moodTitle.innerHTML = "Romantic";
    moodText.innerHTML = "Spread some love today. Sometimes a small gesture can mean everything ❤️";
    popup.style.display = "flex";
};




document.getElementById("close").onclick = function() {
    popup.style.display = "none";
};
