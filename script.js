function hoursToSeconds() {

    var hoursInput = document.getElementById("hoursToSec").value;
    console.log(hoursInput);
    var output = parseFloat(hoursInput) * 3600;


    var div = document.getElementById("hoursToSeconds");


    var pTag = document.createElement("p");
    div.appendChild(pTag);

    if (hoursInput > 1) {
        pText = document.createTextNode(`${hoursInput} hours is equal to ${output} seconds`);
        pTag.appendChild(pText);

    }
    else if (hoursInput == 1) {
        pText = document.createTextNode(`${hoursInput} hour is equal to ${output} seconds`);
        pTag.appendChild(pText);

    }
    else {
        pText = document.createTextNode(`Please Enter a number`);

        pTag.appendChild(pText);

    }


}

function ageInYears() {

    var div = document.getElementById("ageInDays");
    var ageInYears = document.getElementById("ageInYears").value;
    var getDate = new Date(ageInYears);
    var months = getDate.getMonth();
    if (months == 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11) {
        months++;
    }
    var monthIntoDays = months * 30.4167; //...........months into days 
    monthIntoDays = parseInt(monthIntoDays);
    remainDays = 365 - monthIntoDays;
    //console.log(remainDays); 
    var days = getDate.getDate();
    days = 30.4167 - days;
    parseInt(days) // ........................days.....................


    monthsPlusDays = monthIntoDays - days;
    // console.log(monthsPlusDays);
    var years = getDate.getFullYear()
    var yearsIntoDays = 2020 - years;
    // console.log(`Age is ${yearsIntoDays}`);
    yearsIntoDays = yearsIntoDays * 365;
    yearsIntoDays = yearsIntoDays - remainDays;

    pTag = document.createElement("p");
    div.appendChild(pTag);
    pTag.style.color = "green";
    if (yearsIntoDays > 0) {
        textNode = document.createTextNode(`Age in Days : ${yearsIntoDays} Days`);
        pTag.appendChild(textNode);
    }
    else {
        pTag.style.color = "Red";
        textNode = document.createTextNode(`Age in Days: Not Exists`);
        pTag.appendChild(textNode);
    }

    console.log(`Age in days ${yearsIntoDays}`);










}




// .................... leap year or not ??................


function leapYear() {

    var div = document.getElementById("leapYearDiv");
    var yearInput = document.getElementById("leapYear").value;
    //var yearvalue = yearInput.value;
    //parseInt(yearvalue)
    //alert(yearvalue );

    var pTag = document.createElement("p");
    div.appendChild(pTag)
    if ((yearInput % 4 == 0) && (yearInput % 100 != 0) || (yearInput % 400 == 0)) {
        console.log("a leap year");
        pTag.style.color = `green`;
        var textNode = document.createTextNode(`${yearInput} is a leap year`);
        pTag.appendChild(textNode);
    } else {
        console.log("not a leap year");
        pTag.style.color = `red`;
        var textNode = document.createTextNode(`${yearInput} is not a leap year`);
        pTag.appendChild(textNode);

    }




}




function invertedArray() {
    var arr1 = document.getElementById("invertedArr1").value;
    var arr2 = document.getElementById("invertedArr2").value;
    var arr3 = document.getElementById("invertedArr3").value;
    var arr4 = document.getElementById("invertedArr4").value;
    inputArray = [arr1, arr2, arr3, arr4]
    parseInt(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= 0) {
            inputArray[i] = -inputArray[i];
        }
        else if (inputArray[i] < 0) {
            inputArray[i] = -(inputArray[i]);
        }
        else {
            console.log("Please enter a number");
        }



    }
    var div = document.getElementById("arrayDiv");
    var pTag = document.createElement("p");
    pTag.style.color = "green"
    div.appendChild(pTag);
    var textNode = document.createTextNode(`Your Array is Here ! [${inputArray}]`);
    pTag.appendChild(textNode);
    console.log(inputArray);
}








// string number counter program 5


function stringNumCounter() {
    var string1 = document.getElementById("stringCount1").value;
    var string2 = document.getElementById("stringCount2").value;
    var string1Length = string1.length;

    var string2Length = string2.length;
    var div = document.getElementById("stringDiv");
    pTag = document.createElement("p");
    pTag2 = document.createElement("p");
    pTag3 = document.createElement("p");
    div.appendChild(pTag);
    div.appendChild(pTag2);
    div.appendChild(pTag3);
    


    if (string1Length === string2Length) {
        textNode = document.createTextNode(`Number of characters in string 1 >>> ${string1Length} `);
        textNode2 = document.createTextNode(`Number of characters in string 2 >>> ${string2Length}`)
        textNode3 = document.createTextNode(`Congratulations! Your condition is True`)
        pTag.style.color = "green";
        pTag2.style.color = "green";
        pTag3.style.color = "green";
        pTag.appendChild(textNode);  
        pTag2.appendChild(textNode2);
        pTag3.appendChild(textNode3);  
        
    }
    else {
        textNode = document.createTextNode(`Number of characters in string 1 >>> ${string1Length} `);
        textNode2 = document.createTextNode(`Number of characters in string 2 >>> ${string2Length}`)
        textNode3 = document.createTextNode(`Oops! Your condition is False`)
        pTag.style.color = "green";
        pTag2.style.color = "green";
        pTag3.style.color = "red";
        pTag.appendChild(textNode);  
        pTag2.appendChild(textNode2);
        pTag3.appendChild(textNode3);  
    }
}


// program no 6

function convertArray() {
    //var arr = document.getElementsByName("Arr")
 var arr1 = document.getElementById("Arr1").value; 
 var arr2 = document.getElementById("Arr2").value;  
 var arr3 = document.getElementById("Arr3").value;  
 var arr4 = document.getElementById("Arr4").value;  
 var arr5 = document.getElementById("Arr5").value;  
 var arr6 = document.getElementById("Arr6").value;  
 var arr7 = document.getElementById("Arr7").value;  
 var arr8 = document.getElementById("Arr8").value;  

var inputArray = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8];

var div = document.getElementById("strToIntDiv");
pTag = document.createElement("p");
div.appendChild(pTag);

for (let i = 0; i < inputArray.length; i++) {
    if ((isNaN(inputArray[i]) === false) && (inputArray[i] != "") )  {
        inputArray[i] = `"${inputArray[i]}"`;
       
    }
    else if (isNaN(inputArray[i]) === true) {
        inputArray[i] = inputArray[i];
    
    } 
        // else if (inputArray[i] == "") {
        
        
        // }
        
    
else{
    console.log("enter a value");
}

}

console.log(inputArray);

textNode = document.createTextNode(`Your Array is here [${inputArray}]`);
pTag.style.color = "green";
pTag.appendChild(textNode);





}




// program 7





function coronaEnds() {
    var div = document.getElementById("coronaDiv");
    pTag = document.createElement("p");
    div.appendChild(pTag);
    textNode = document.createTextNode(`Oops! Failed to Build Logic`);
    pTag.style.color = "red";
    pTag.appendChild(textNode)
}