function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();


var accordionData = [
    { id: 0, title: "Accordion One", content: "If you need to present this lesson offline, consider exporting an XML file (Tools > Export) in a local developer environment of WordPress and demonstrating on the same local environment how to import this file." },
    { id: 1, title: "Accordion Two", content: "If you need to present this lesson offline, consider exporting an XML file (Tools > Export) in a local developer environment of WordPress and demonstrating on the same local environment how to import this file." },
    { id: 2, title: "Accordion Three", content: "If you need to present this lesson offline, consider exporting an XML file (Tools > Export) in a local developer environment of WordPress and demonstrating on the same local environment how to import this file." }
];


for (let i = 0; i < accordionData.length; i++) {
    let accordionContainer = document.createElement('div');
    let accordionTitle = document.createElement('div');
    let accordionContent = document.createElement('div');

    accordionContainer.className = "accordion-container";
    accordionContainer.setAttribute("key", i);

    accordionTitle.textContent = accordionData[i].title;
    accordionTitle.className = "accordion-title";

    accordionContent.textContent = accordionData[i].content;
    accordionContent.className = "accordion-content";

    accordionContainer.appendChild(accordionTitle);
    accordionContainer.appendChild(accordionContent);

    accordionTitle.addEventListener('click', function () {
        document.querySelector(".expand")?.classList.remove("expand");
        accordionContent.className = "accordion-content expand";
    });

    document.getElementById("accordion").appendChild(accordionContainer);

}

var imageData = [
    { id: 0, title: "first image", imageUrl: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759", altText: "first-img" },
    { id: 0, title: "second image", imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", altText: "second-img" },
    { id: 0, title: "third image", imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", altText: "third-img" },
    { id: 0, title: "first image", imageUrl: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759", altText: "first-img" },
    { id: 0, title: "second image", imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", altText: "second-img" },
    { id: 0, title: "third image", imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", altText: "third-img" },
]

var cauroselImageContainer = document.querySelector(".image-container");

for (let i = 0; i < imageData.length; i++) {

    let imageItem = document.createElement("div");
    let imageTitle = document.createElement("div");
    let imageHolder = document.createElement("img");

    imageItem.className = "image-item"

    imageTitle.textContent = imageData[i].title;
    imageTitle.className = "image-title";

    imageHolder.src = imageData[i].imageUrl;
    imageHolder.className = "image-holder";
    imageHolder.setAttribute("alt", imageData[i].altText)

    imageItem.appendChild(imageTitle);
    imageItem.appendChild(imageHolder);

    cauroselImageContainer.appendChild(imageItem);
}

document.querySelector("#next").addEventListener("click", function (event) {
    let updatedscrollLeft = cauroselImageContainer.scrollLeft + 500;
    cauroselImageContainer.scrollTo({
        left: updatedscrollLeft,
    })
    document.querySelector("#next").disabled = ((updatedscrollLeft + 500) === cauroselImageContainer.scrollWidth);
    document.querySelector("#prev").disabled = (updatedscrollLeft === 0);
    console.log(cauroselImageContainer.scrollLeft)
})

document.querySelector("#prev").addEventListener("click", function (event) {
    let updatedscrollLeft = cauroselImageContainer.scrollLeft - 500;
    cauroselImageContainer.scrollTo({
        left: updatedscrollLeft,
    })
    document.querySelector("#next").disabled = ((updatedscrollLeft + 500) === cauroselImageContainer.scrollWidth);
    document.querySelector("#prev").disabled = (updatedscrollLeft === 0);
    console.log(cauroselImageContainer.scrollLeft)
})




var errorMsg = document.querySelector(".error-msg");
var countDowntimer;
var duration;

function updateInput( hours, minutes, seconds) {
    document.querySelector("#hours").value = hours;
    document.querySelector("#minutes").value =  minutes;
    document.querySelector("#seconds").value =  seconds;
}

function updateTimer() {
    let hours, minutes, seconds
    --duration;
    hours = parseInt(duration / 3600);
    minutes = parseInt((duration % 3600) / 60);
    seconds = parseInt((duration % 3600) % 60)
    updateInput(hours,minutes,seconds);
    if(duration == 0)
        clearInterval(countDowntimer);
    
}


function showerrorMsg() {
    errorMsg.style.display = "block";
}

document.querySelector("#start").addEventListener("click", function () {

    let hours = document.querySelector("#hours").value != "" ? parseInt(document.querySelector("#hours").value) : 0;
    let minutes = document.querySelector("#minutes").value != "" ? parseInt(document.querySelector("#minutes").value) : 0;
    let seconds = document.querySelector("#seconds").value != "" ? parseInt(document.querySelector("#seconds").value) : 0;

    if ((seconds > 59 || seconds < 0) || (minutes > 59 || minutes < 0) || hours < 0) {
        showerrorMsg();
        return;
    }
    duration = (hours * 3600) + (minutes * 60) + seconds;

    if (duration > 0)
        countDowntimer = setInterval(updateTimer, 1000);

    return;
})

document.querySelector("#pause").addEventListener("click",function(){
    clearInterval(countDowntimer);
});

document.querySelector("#resume").addEventListener("click",function(){
    if (duration > 0)
        countDowntimer = setInterval(updateTimer, 1000);
});

document.querySelector("#reset").addEventListener("click",function(){
    duration = 0;
    clearInterval(countDowntimer);
    updateInput("","","");
});