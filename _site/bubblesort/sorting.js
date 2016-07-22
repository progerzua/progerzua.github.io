/*
You could see there a lot of shitty code
Was written very fast, only to show BubbleSort in the action
*/

var steps = [];
var currentStep = 0;
var speciali = null, specialj = null;
var temp = null;
//window.location.hash = '#openModal';

function addStep(line){
   var clone = new Array(6);
   for (var ii = 0; ii < 6; ii++) {
     clone[ii] = new Array(7);
   }
   
   for(var ii = 0; ii < 6; ii++){
      for(var jj = 0; jj < 7; jj++){
         clone[ii][jj] = alfa[ii][jj];
      }
   }
   
   
   if (speciali === null && specialj === null && line === 20){
      steps.push([line-1, clone, k,is,j,temp]);
   } else {
      if (line === 20){
         steps.push([line-1, clone, k,is,specialj,temp]);
      } else {
         steps.push([line-1, clone, k,speciali,specialj,temp]);
      }
   }
}

function executeStep(number){   
   currentStep = number;
   if (number > 0 && number < steps.length){
      document.getElementById("curstep").innerHTML = number;
      var rows = document.getElementsByClassName("linenums")[1].childNodes;
      for (var i = 0; i < rows.length; i++){
         rows[i].setAttribute("style", "");
      }
      
      for(i = 0; i < 6; i++){
         for(j = 0; j < 7; j++){
            document.getElementById("r"+i).childNodes[j].setAttribute("style", "");
         }
      }
      
      document.getElementsByClassName("linenums")[1].childNodes[steps[number][0]].style.backgroundColor = "rgba(255, 0, 0, 0.25)";
      
      if (steps[number][2] === null){
         document.getElementById("k").innerHTML = "null";
      } else {
         document.getElementById("k").innerHTML = steps[number][2];
      }
      
      if(steps[number][3] === null){
         document.getElementById("i").innerHTML = "null";
      } else {
         document.getElementById("i").innerHTML = steps[number][3];
      }
      
      if (steps[number][4] === null){
         document.getElementById("j").innerHTML = "null";
      } else {
         document.getElementById("j").innerHTML = steps[number][4];
      }
      
      if (steps[number][5] === null){
         document.getElementById("temp").innerHTML = "null";
      } else {
         document.getElementById("temp").innerHTML = steps[number][5];
      }
      
      var alfa = steps[number][1];
      var i = steps[number][3];
      var j = steps[number][4];
      var k = steps[number][2];
      var temp = steps[number][5];
      if (number > 1){
         var oldAlfa = steps[number - 1][1];
         var oldi = steps[number - 1][3];
         var oldj = steps[number - 1][4];
         var oldk = steps[number - 1][2];
         var oldtemp = steps[number - 1][5];
      } else {
         var oldAlfa = null;
         var oldi = null;
         var oldj = null;
         var oldk = null;
         var oldtemp = null;
      }
      
      if (i !== oldi){
         document.getElementById("i").style.backgroundColor = "rgba(255, 0, 0, 0.25)";
      } else {
         document.getElementById("i").setAttribute("style", "");
      }
      
      if (j !== oldj){
         document.getElementById("j").style.backgroundColor = "rgba(255, 0, 0, 0.25)";
      } else {
         document.getElementById("j").setAttribute("style", "");
      }
      
      if (k !== oldk){
         document.getElementById("k").style.backgroundColor = "rgba(255, 0, 0, 0.25)";
      } else {
         document.getElementById("k").setAttribute("style", "");
      }
      
      if (temp !== oldtemp){
         document.getElementById("temp").style.backgroundColor = "rgba(255, 0, 0, 0.25)";
      } else {
         document.getElementById("temp").setAttribute("style", "");
      }
      
      for(i = 0; i < 6; i++){
         for(j = 0; j < 7; j++){
            if (alfa[i][j] === null){
               document.getElementById("r"+i).childNodes[j].innerHTML = "null";
            } else {
               if (oldAlfa !== null && oldAlfa[i][j] !== alfa[i][j]){
                  document.getElementById("r"+i).childNodes[j].style.backgroundColor = "rgba(255, 0, 0, 0.25)";
               }
               document.getElementById("r"+i).childNodes[j].innerHTML = alfa[i][j];
            }
         }
      }
      
   }
}

function sorted(arr){
   for (speciali = arr.length - 1; speciali > 0; speciali--){
      for (specialj = 0; specialj < speciali; specialj++){
         addStep(33);
         if (arr[specialj] > arr[specialj+1]){
            temp = arr[specialj];
            addStep(34);
            arr[specialj] = arr[specialj+1];
            addStep(35);
            arr[specialj+1] = temp;
            addStep(36);
         }
      }
   }
}

var alfa = new Array(6);
for (var i = 0; i < 6; i++) {
  alfa[i] = new Array(7);
}

for(i = 0; i < 6; i++){
   for(j = 0; j < 7; j++){
      alfa[i][j] = null;
   }
}


var k = null,i = null,j = null,temp = null;
var is = null; // i for 'for' where sorted called
addStep(3); // Will be never executed. Dirt hack
addStep(3);
addStep(4);

for(i = 0; i < 6; i++){
   for(j = 0; j < 7; j++){
      k = Math.floor(Math.random() * (9 - 0) + 0);
      addStep(7);
      alfa[i][j] = k;
      addStep(8);
   }
}


for (is = 0; is < 6; is++){
   addStep(20);
   sorted(alfa[is]);
}

document.getElementById("steps").innerHTML = steps.length;