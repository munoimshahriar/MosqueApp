let hr = document.getElementById("hrCurrentTime");
let min = document.getElementById("minCurrentTime");
let sec = document.getElementById("secCurrentTime");

setInterval(()=>{
    const currentTime = new Date();
    // console.log(currentTime.getHours());
    hr.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)

document.addEventListener("DOMContentLoaded", function () {
    // IDs of the editable Adhan and Iqamah times
    const prayers = ["fajr", "zohor", "asr", "maghrib", "esha", "jumma"];
    
    // Load saved prayer times from local storage
    prayers.forEach(prayer => {
        const adhanKey = `${prayer}Adhan`;
        const iqamahKey = `${prayer}Iqamah`;
        const endKey = `${prayer}End`;

        const savedAdhanTime = localStorage.getItem(adhanKey);
        const savedIqamahTime = localStorage.getItem(iqamahKey);
        const savedEndTime = localStorage.getItem(endKey);

        if (savedAdhanTime) {
            document.getElementById(adhanKey).textContent = savedAdhanTime;
        }
        if (savedIqamahTime) {
            document.getElementById(iqamahKey).textContent = savedIqamahTime;
        }
        if (savedEndTime) {
            document.getElementById(endKey).textContent = savedEndTime;
        }
    });

    // Add event listeners for saving the times when they are edited
    prayers.forEach(prayer => {
        const adhanElement = document.getElementById(`${prayer}Adhan`);
        const iqamahElement = document.getElementById(`${prayer}Iqamah`);
        const endElement = document.getElementById(`${prayer}End`);

        adhanElement.addEventListener('keyup', function () {
            localStorage.setItem(`${prayer}Adhan`, adhanElement.textContent);
        });

        iqamahElement.addEventListener('keyup', function () {
            localStorage.setItem(`${prayer}Iqamah`, iqamahElement.textContent);
        });

        endElement.addEventListener('keyup', function () {
            localStorage.setItem(`${prayer}End`, endElement.textContent);
        });
    });
});
