let form = document.forms['form1'];
let options1 = form.time1.options;
let options2 = form.time2.options;
let options3 = form.time3.options;
let options4 = form.time4.options;

let timeArray = [];
let element1 = document.getElementById('hrs');
let element2 = document.getElementById("mins");
let element3 = document.getElementById("secs");
let element4 = document.getElementById("setHalf");
    

form.onsubmit = function(e) {
    e.preventDefault();


    let index1 = options1.selectedIndex;
    let optionText1 = options1[index1].innerText;
    timeArray.push(calcTime(optionText1));

    document.getElementById('update1').innerText = "Wake Up Time : " + optionText1;




    let index2 = options2.selectedIndex;
    let optionText2 = options2[index2].innerText;
    timeArray.push(calcTime(optionText2));

    document.getElementById('update2').innerText = "Lunch Time : " + optionText2;



    let index3 = options3.selectedIndex;
    let optionText3 = options3[index3].innerText;
    timeArray.push(calcTime(optionText3));

    document.getElementById('update3').innerText = "Nap Time : " + optionText3;



    let index4 = options4.selectedIndex;
    let optionText4 = options4[index4].innerText;
    timeArray.push(calcTime(optionText4));

    document.getElementById('update4').innerText = "Night Time : " + optionText4;



    for (let i = 0; i < 4; i++) {
        for(let j = i+1; j < 4; j++) {
            if(timeArray[i] > timeArray[j]) {
                
                let temp = timeArray[i];
                timeArray[i] = timeArray[j];
                timeArray[j] = temp;
            }
        }
    }
    
    let str = element1.innerText + document.getElementById('setHalf').innerText;

    if(timeArray.length == 4) {
        if((parseInt(calcTime(str)) >= timeArray[0]) && (parseInt(calcTime(str)) < timeArray[1])) {
            console.log("case1 passed");
            document.getElementById("text1").innerText = "GOOD MORNING!! WAKE UP !!";
            document.getElementById('text2').innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
            document.getElementsByClassName("picture")[0].style.backgroundImage = "url(./vika.svg)"
    
        } else if((parseInt(calcTime(str)) >= timeArray[1]) && (parseInt(calcTime(str)) < timeArray[2])) {
            console.log("case2 passed");
            document.getElementById("text1").innerText = "GOOD AFTERNOON!! WORK HARD!!";
            document.getElementById('text2').innerText = "LET'S HAVE SOME LUNCH"
            document.getElementsByClassName("picture")[0].style.backgroundImage = "url(./img2.svg)"
    
        } else if((parseInt(calcTime(str)) >= timeArray[2]) && (parseInt(calcTime(str)) < timeArray[3])) {
            console.log("case3 passed");
            document.getElementById("text1").innerText = "GOOD EVENING!!";
            document.getElementById('text2').innerText = "STOP YAWNING, GET SOME TEA ITS JUST EVENING";
            document.getElementsByClassName("picture")[0].style.backgroundImage =  "url(./lunch_image.png)";
    
        } else if((parseInt(calcTime(str)) >= timeArray[3]) || (parseInt(calcTime(str)) < timeArray[0])) {
            console.log("case4 passed");
            document.getElementById("text1").innerText = "GOOD NIGHT!!";
            document.getElementById('text2').innerText = "GO TO BED AND GET SOME SLEEP!";
            document.getElementsByClassName("picture")[0].style.backgroundImage = "url(./night.png)";
    
        } 
    } 

}



const calcTime = (t) => {
    let initial = t.split(" ")[0];
    if(initial === "12PM") {
        return 12;
    } else if (initial === "12AM") {
        return 0;
    } else if(initial.includes("PM")) {
        return parseInt(initial.split("PM")) + 12;
    } else {
        return parseInt(initial.split("AM"));
    }
}

console.log(timeArray);
element1.innerText = "2";

$(document).ready(function() {
    $(".alarm").hover(function() {
        this.innerText = "Set Alarm";
    }, function() {
        this.innerText = "Party Time!";
    });
});

function clock() {
    let today = new Date();
    let hrs = today.getHours();
    element2.innerText = today.getMinutes();
    element3.innerText = today.getSeconds();

    element4.innerText = (hrs < 12) ? "AM" : "PM";
    element1.innerText = (hrs > 12) ? hrs - 12 : hrs;

    var x = setInterval(clock, 1000);
}