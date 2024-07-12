// Get the video element
var audio;
var emptyAudio;

const audio1 = document.getElementById('title');
const audio2 = document.getElementById('apg34');
const audio3 = document.getElementById('apg56');
const audio4 = document.getElementById('apg78');
const audio5 = document.getElementById('apg910');
const audio6 = document.getElementById('apg1112');
const audio7 = document.getElementById('apg1314');
const audio8 = document.getElementById('apg1516');
const audio9 = document.getElementById('apg1718');
const audio10 = document.getElementById('apg1920');
const audio11 = document.getElementById('apg2122');
const audio12 = document.getElementById('apg2324');
const audio13 = document.getElementById('apg2526');
const audio14 = document.getElementById('apg2728');

var nextPage;
var prevPage;
const img1 = document.getElementById('page1');
const img2 = document.getElementById('page2');
const img3 = document.getElementById('page3');
const img4 = document.getElementById('page4');
const img5 = document.getElementById('page5');
const img6 = document.getElementById('page6');
const img7 = document.getElementById('page7');
const img8 = document.getElementById('page8');
const img9 = document.getElementById('page9');
const img10 = document.getElementById('page10');
const img11 = document.getElementById('page11');
const img12 = document.getElementById('page12');
const img13 = document.getElementById('page13');
const img14 = document.getElementById('page14');
const img15 = document.getElementById('page15');
const img16 = document.getElementById('page16');
const img17 = document.getElementById('page17');

const vid1 = document.getElementById('page1vid');
const vid2 = document.getElementById('page2vid');
const vid3 = document.getElementById('page3vid');
const vid4 = document.getElementById('page4vid');
const vid5 = document.getElementById('page5vid');


const timeKeeper = document.getElementById('playtime');

var currentPage = 1;

var text = document.getElementById('textbox');

var sen1;
var sen2;
var sen3;
var sen4;
var sen5;
var sen6;
var sen7;
var sen8;
var sen9;
var sen10;
var sen11;
var sen12;
var sen13;
var sen14;
var sen15;
var sen16;
var sen17;
var sen18;
var sen19;
var sen20;
var sen21;
var sen22;
var sen23;
var sen24;
var sen25;
var sen26;
var sen27;
var sen28;
var sen29;
var sen30;
var sen31;
var sen32;
var sen33;
var sen34;
var sen35;
var sen36;
var sen37;

var stnEmpty;

var stn1 = document.getElementById('sentence1');
var stn1a = document.getElementById('sentence1a');
var stn1b = document.getElementById('sentence1b');
var stn1c = document.getElementById('sentence1c');
var stn2 = document.getElementById('sentence2');
var stn2a = document.getElementById('sentence2a');
var stn2b = document.getElementById('sentence2b');
var stn3 = document.getElementById('sentence3');
var stn3a = document.getElementById('sentence3a');
var stn3b = document.getElementById('sentence3b');
var stn4 = document.getElementById('sentence4');
var stn4a = document.getElementById('sentence4a');
var stn5 = document.getElementById('sentence5');
var stn5a = document.getElementById('sentence5a');
var stn5b = document.getElementById('sentence5b');
var stn6 = document.getElementById('sentence6');
var stn6a = document.getElementById('sentence6a');
var stn6b = document.getElementById('sentence6b');
var stn6c = document.getElementById('sentence6c');
var stn6d = document.getElementById('sentence6d');
var stn7 = document.getElementById('sentence7');
var stn7a = document.getElementById('sentence7a');
var stn7b = document.getElementById('sentence7b');
var stn7c = document.getElementById('sentence7c');
var stn8 = document.getElementById('sentence8');
var stn8a = document.getElementById('sentence8a');
var stn8b = document.getElementById('sentence8b');
var stn8c = document.getElementById('sentence8c');
var stn8d = document.getElementById('sentence8d');
var stn8e = document.getElementById('sentence8e');
var stn9 = document.getElementById('sentence9');
var stn9a = document.getElementById('sentence9a');
var stn9b = document.getElementById('sentence9b');
var stn9c = document.getElementById('sentence9c');
var stn9d = document.getElementById('sentence9d');

var stn10 = document.getElementById('sentence10');
var stn10a = document.getElementById('sentence10a');
var stn10b = document.getElementById('sentence10b');
var stn10c = document.getElementById('sentence10c');
var stn11 = document.getElementById('sentence11');
var stn11a = document.getElementById('sentence11a');
var stn11b = document.getElementById('sentence11b');
var stn11c = document.getElementById('sentence11c');
var stn11d = document.getElementById('sentence11d');
var stn12 = document.getElementById('sentence12');
var stn12a = document.getElementById('sentence12a');
var stn13 = document.getElementById('sentence13');
var stn13a = document.getElementById('sentence13a');
var stn14 = document.getElementById('sentence14');
var stn14a = document.getElementById('sentence14a');
var stn14b = document.getElementById('sentence14b');
var stn14c = document.getElementById('sentence14c');
var stn15 = document.getElementById('sentence15');
var stn15a = document.getElementById('sentence15a');
var stn16 = document.getElementById('sentence16');
var stn16a = document.getElementById('sentence16a');
var stn17 = document.getElementById('sentence17');
var stn17a = document.getElementById('sentence17a');
var stn17b = document.getElementById('sentence17b');
var stn17c = document.getElementById('sentence17c');
var stn17d = document.getElementById('sentence17d');
var stn18 = document.getElementById('sentence18');
var stn18a = document.getElementById('sentence18a');
var stn18b = document.getElementById('sentence18b');
var stn18c = document.getElementById('sentence18c');
var stn19 = document.getElementById('sentence19');
var stn19a = document.getElementById('sentence19a');
var stn20 = document.getElementById('sentence20');
var stn20a = document.getElementById('sentence20a');
var stn21 = document.getElementById('sentence21');
var stn22 = document.getElementById('sentence22');
var stn22a = document.getElementById('sentence22a');

var stn23 = document.getElementById('sentence23');
var stn23a = document.getElementById('sentence23a');
var stn23b = document.getElementById('sentence23b');
var stn23c = document.getElementById('sentence23c');
var stn24 = document.getElementById('sentence24');
var stn24a = document.getElementById('sentence24a');
var stn24b = document.getElementById('sentence24b');
var stn24c = document.getElementById('sentence24c');
var stn25 = document.getElementById('sentence25');
var stn25a = document.getElementById('sentence25a');
var stn25b = document.getElementById('sentence25b');
var stn26 = document.getElementById('sentence26');
var stn26a = document.getElementById('sentence26a');
var stn26b = document.getElementById('sentence26b');
var stn26c = document.getElementById('sentence26c');
var stn27 = document.getElementById('sentence27');
var stn27a = document.getElementById('sentence27a');
var stn27b = document.getElementById('sentence27b');
var stn27c = document.getElementById('sentence27c');
var stn28 = document.getElementById('sentence28');
var stn28a = document.getElementById('sentence28a');
var stn28b = document.getElementById('sentence28b');
var stn29 = document.getElementById('sentence29');
var stn29a = document.getElementById('sentence29a');
var stn30 = document.getElementById('sentence30');
var stn30a = document.getElementById('sentence30a');
var stn30b = document.getElementById('sentence30b');
var stn30c = document.getElementById('sentence30c');
var stn31 = document.getElementById('sentence31');
var stn32 = document.getElementById('sentence32');
var stn33 = document.getElementById('sentence33');
var stn34 = document.getElementById('sentence34');
var stn35 = document.getElementById('sentence35');
var stn36 = document.getElementById('sentence36');
var stn37 = document.getElementById('sentence37');
var stn38 = document.getElementById('sentence38');
var stn39 = document.getElementById('sentence39');
var stn40 = document.getElementById('sentence40');
var stn41 = document.getElementById('sentence41');
var stn42 = document.getElementById('sentence42');
var stn43 = document.getElementById('sentence43');

var index = 0;
var currentTimeStamps = [];
var timestamp1 = [0,4,8,10,12,16,17,20,22,24,27,28,31,34,36,40,42,44,47,50,53,58,60,64,67];
var timestamp2 = [0,4,6,8,11,14,16,19,23,25,27,31,35,36,40,42,45,47,49,51,54,56,58,60,63,66,68,70,73,75];
var timestamp3 = [0,2,6,8,10.5,14.5,16.5,19,22,26,29,31,36.5,40,42,43,46,49,52,54,57,58.5,60,62];
var timestamp4 = [0,2.5,5,8,10,13,15];

var textshow1 = ["sen1","sen1a","sen1b","sen1c","sen1d","sen2","sen3","sen4","sen5","sen6","sen7","sen8"]


function GoPrev(){
	document.getElementById("myModal").style.display = "none";
	document.getElementById("myModal2").style.display = "none";
	document.getElementById("myModal3").style.display = "none";
	document.getElementById("myModal4").style.display = "none";
	//alert(currentPage)
  currentPage--;
  if(audio != emptyAudio){
    audio.pause();
    audio.currentTime = 0;
  }
  timeSlider.value = 0;
  if(currentPage < 1){
    currentPage = 1;
  }
  const a = CheckPageItem(currentPage);
  a.style.visibility = 'visible';
  const b = CheckPageItem(currentPage+1);
  b.style.visibility = 'hidden'
  ResetVideoVisibility();
  UpdatePage(currentPage);
}

function GoNext(){
	document.getElementById("myModal").style.display = "none";
	document.getElementById("myModal2").style.display = "none";
	document.getElementById("myModal3").style.display = "none";
	document.getElementById("myModal4").style.display = "none";
	
  //currentPage++;
  if(audio != emptyAudio){
    audio.pause();
    audio.currentTime = 0;
  }
  timeSlider.value = 0;
  if(currentPage == 8){
    currentPage = 8;
  }else{
	    currentPage++;
  }
	//alert(currentPage);
  const a = CheckPageItem(currentPage);
  a.style.visibility = 'visible';
  const b = CheckPageItem(currentPage-1);
  b.style.visibility = 'hidden'
  ResetVideoVisibility();
  UpdatePage(currentPage);
}

function Replay(){
  timeSlider.value = 0;
  if(audio != emptyAudio){
      audio.currentTime = 0;
      audio.play();
  }
}

function UpdatePage(index){
  switch(index){
    case 1:
      audio = emptyAudio;
		    document.getElementById('page1vid').style.visibility = 'visible';
		   vid1.style.visibility = 'visible';
		   document.getElementById('page1vid').play();
      break;
    case 2:
		   document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		   document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio1;
      UpdateSlider();
      ResetParagraph();
	  break;
    case 3:
		  	document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio2;
      UpdateSlider();
      ResetParagraph();
	   vid2.style.visibility = 'visible';
	   document.getElementById('page2vid').play();
      document.getElementById('Page3').style.visibility = 'visible';
      sen1 = stn1;
	  sen2 = stn1a;
	  sen3 = stn1b;
	  sen4 = stn1c;
	  sen5 = stn2;
      sen6 = stn3;
      sen7 = stn3a;
	  sen8 = stn3b;
      sen9 = stn4;
	  sen10 = stn4a;
      sen11 = stn5;
      sen12 = stn5a;
      sen13 = stn6;
      sen14 = stn6a;
      sen15 = stn6b;
      sen16 = stn7;
      sen17 = stn7a;
      sen18 = stn7b;
      sen19 = stn8;
	  sen20 = stn8a;
	  sen21 = stn8b;
	  sen22 = stn8c;
	  sen23 = stn9;
	  sen24 = stn9a;
	  sen25 = stn9b;
	  sen26 = stnEmpty;
	  sen27 = stnEmpty;
	  sen28 = stnEmpty;
	  sen29 = stnEmpty;
	  sen30 = stnEmpty;
      currentTimeStamps = timestamp1;
      break;
    case 4:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio3;
      UpdateSlider();
      ResetParagraph();
		   vid3.style.visibility = 'visible';
	   document.getElementById('page3vid').play();
      document.getElementById('Page4').style.visibility = 'visible';
      sen1 = stn10;
	  sen2 = stn10a;
	  sen3 = stn10b;
	  sen4 = stn10c;
	  sen5 = stn11;
	  sen6 = stn11a;
	  sen7 = stn11b;
      sen8 = stn11c;
      sen9 = stn12;
      sen10 = stn12a;
      sen11 = stn13;
      sen12 = stn14;
      sen13 = stn14a;
      sen14 = stn14b;
      sen15 = stn15;
      sen16 = stn16;
	  sen17 = stn16a;
      sen18 = stn17;
	  sen19 = stn17a;
	  sen20 = stn17b;
	  sen21 = stn17c;
	  sen22 = stn18;
	  sen23 = stn18a;
	  sen24 = stn18b;
	  sen25 = stn19;
	  sen26 = stn19a;
	  sen27 = stn20;
	  sen28 = stn20a;
	  sen29 = stn21;
	  sen30 = stn22;
      currentTimeStamps = timestamp2;
      break;
    case 5:
		   document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio4;
      UpdateSlider();
      ResetParagraph();
    //  vid3.style.visibility = 'visible';
		  vid4.style.visibility = 'visible';
	   document.getElementById('page4vid').play();
      document.getElementById('Page5').style.visibility = 'visible';
      sen1 = stn23;
      sen2 = stn23a;
      sen3 = stn23b;
      sen4 = stn23c;
      sen5 = stn24;
      sen6 = stn24a;
      sen7 = stn24b;
      sen8 = stn24c;
      sen9 = stn25;
      sen10 = stn25a;
      sen11 = stn25b;
      sen12 = stn26;
      sen13 = stn26a;
      sen14 = stn26b;
      sen15 = stn27;
	  sen16 = stn27a;
	  sen17 = stn27b;
	  sen18 = stn28;
	  sen19 = stn28a;
	  sen20 = stn29;
	  sen21 = stn30;
	  sen22 = stn30a;
	  sen23 = stn30b;
	  sen24 = stn30c;
	  sen25 = stnEmpty;
	  sen26 = stnEmpty;
	  sen27 = stnEmpty;
	  sen28 = stnEmpty;
	  sen29 = stnEmpty;
	  sen30 = stnEmpty;
      currentTimeStamps = timestamp3;
      break;
    case 6:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio5;
      UpdateSlider();
      ResetParagraph();
		  vid5.style.visibility = 'visible';
	   document.getElementById('page5vid').play();
      document.getElementById('Page6').style.visibility = 'visible';
      sen1 = stn31;
      sen2 = stn32;
      sen3 = stn33;
      sen4 = stn34;
      sen5 = stn35;
      sen6 = stn36;
      sen7 = stn37;
      sen8 = stnEmpty;
      sen9 = stnEmpty;
      sen10 = stnEmpty;
      sen11 = stnEmpty;
      sen12 = stnEmpty;
      sen13 = stnEmpty;
      sen14 = stnEmpty;
      sen15 = stnEmpty;
	  sen16 = stnEmpty;
	  sen17 = stnEmpty;
	  sen18 = stnEmpty;
	  sen19 = stnEmpty;
	  sen20 = stnEmpty;
	  sen21 = stnEmpty;
	  sen22 = stnEmpty;
	  sen23 = stnEmpty;
	  sen24 = stnEmpty;
	  sen25 = stnEmpty;
	  sen26 = stnEmpty;
	  sen27 = stnEmpty;
	  sen28 = stnEmpty;
	  sen29 = stnEmpty;
	  sen30 = stnEmpty;
      currentTimeStamps = timestamp4;
      break;
    case 7:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		   document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = emptyAudio;
      ResetParagraph();
      break;
    case 8:
      audio = emptyAudio;
	  ResetParagraph();
      break;
    default:
  }
  if(audio != emptyAudio){
    audio.play();
  }
}

function PlayAudio() {

  switch(currentPage){
    case 2:
      audio.play();
      break;
    case 3:
      audio.play();
      break;
    case 4:
      audio.play();
      break;
    case 5:
      audio.play();
      break;
    case 6:
      audio.play();
      break;
    default:
      audio = emptyAudio;
      // code block
  }
}

function PauseAudio() {
  switch(currentPage){
    case 2:
      audio.pause();
      break;
    case 3:
      audio.pause();
      break;
    case 4:
      audio.pause();
      break;
    case 5:
      audio.pause();
      break;
    case 6:
      audio.pause();
      break;
    default:
      audio = emptyAudio;
      // code block
  }
}

function CheckTime(time){
  if(currentTimeStamps.length != 0){
    currentTimeStamps.forEach((item, i) => {
      if(time >= currentTimeStamps[i]){
        index = i;
      }
    });
    ShowSelection(index);
  }
}

function ShowSelection(index){
  switch(index) {
    case 0:
      ResetColour();
      sen1.style.color = 'red';
      break;
    case 1:
      ResetColour();
      sen2.style.color = 'red';
      break;
    case 2:
      ResetColour();
      sen3.style.color = 'red';
      break;
    case 3:
      ResetColour();
      sen4.style.color = 'red';
      break;
    case 4:
      ResetColour();
      sen5.style.color = 'red';
      break;
    case 5:
      ResetColour();
      sen6.style.color = 'red';
      break;
    case 6:
      ResetColour();
      sen7.style.color = 'red';
      break;
    case 7:
      ResetColour();
      sen8.style.color = 'red';
      break;
    case 8:
      ResetColour();
      sen9.style.color = 'red';
      break;
    case 9:
      ResetColour();
      sen10.style.color = 'red';
      break;
    case 10:
      ResetColour();
      sen11.style.color = 'red';
      break;
    case 11:
      ResetColour();
      sen12.style.color = 'red';
      break;
    case 12:
      ResetColour();
      sen13.style.color = 'red';
      break;
    case 13:
      ResetColour();
      sen14.style.color = 'red';
      break;
    case 14:
      ResetColour();
      sen15.style.color = 'red';
      break; 
	case 15:
      ResetColour();
      sen16.style.color = 'red';
      break;  
	case 16:
      ResetColour();
      sen17.style.color = 'red';
      break;  
	case 17:
      ResetColour();
      sen18.style.color = 'red';
      break;  
	case 18:
      ResetColour();
      sen19.style.color = 'red';
      break;
	case 19:
      ResetColour();
      sen20.style.color = 'red';
      break;
	case 20:
      ResetColour();
      sen21.style.color = 'red';
      break;
	case 21:
      ResetColour();
      sen22.style.color = 'red';
      break;
	case 22:
      ResetColour();
      sen23.style.color = 'red';
      break;
	case 23:
      ResetColour();
      sen24.style.color = 'red';
      break;
	case 24:
      ResetColour();
      sen25.style.color = 'red';
      break;
	case 25:
      ResetColour();
      sen26.style.color = 'red';
      break;
	case 26:
      ResetColour();
      sen27.style.color = 'red';
      break;
	case 27:
      ResetColour();
      sen28.style.color = 'red';
      break;
	case 28:
      ResetColour();
      sen29.style.color = 'red';
      break;
	case 29:
      ResetColour();
      sen30.style.color = 'red';
      break;  
    default:
      // code block
  }
}

function ResetColour(){
  if(sen1 != stnEmpty){sen1.style.color = 'black';}
  if(sen2 != stnEmpty){sen2.style.color = 'black';}
  if(sen3 != stnEmpty){sen3.style.color = 'black';}
  if(sen4 != stnEmpty){sen4.style.color = 'black';}
  if(sen5 != stnEmpty){sen5.style.color = 'black';}
  if(sen6 != stnEmpty){sen6.style.color = 'black';}
  if(sen7 != stnEmpty){sen7.style.color = 'black';}
  if(sen8 != stnEmpty){sen8.style.color = 'black';}
  if(sen9 != stnEmpty){sen9.style.color = 'black';}
  if(sen10 != stnEmpty){sen10.style.color = 'black';}
  if(sen11 != stnEmpty){sen11.style.color = 'black';}
  if(sen12 != stnEmpty){sen12.style.color = 'black';}
  if(sen13 != stnEmpty){sen13.style.color = 'black';}
  if(sen14 != stnEmpty){sen14.style.color = 'black';}
  if(sen15 != stnEmpty){sen15.style.color = 'black';}
  if(sen16 != stnEmpty){sen16.style.color = 'black';}
  if(sen17 != stnEmpty){sen17.style.color = 'black';}
  if(sen18 != stnEmpty){sen18.style.color = 'black';}
  if(sen19 != stnEmpty){sen19.style.color = 'black';}
  if(sen20 != stnEmpty){sen20.style.color = 'black';}
  if(sen21 != stnEmpty){sen21.style.color = 'black';}
  if(sen22 != stnEmpty){sen22.style.color = 'black';}
  if(sen23 != stnEmpty){sen23.style.color = 'black';}
  if(sen24 != stnEmpty){sen24.style.color = 'black';}
  if(sen25 != stnEmpty){sen25.style.color = 'black';}
  if(sen26 != stnEmpty){sen26.style.color = 'black';}
  if(sen27 != stnEmpty){sen27.style.color = 'black';}
  if(sen28 != stnEmpty){sen28.style.color = 'black';}
  if(sen29 != stnEmpty){sen29.style.color = 'black';}
  if(sen30 != stnEmpty){sen30.style.color = 'black';}
}

// Get the time slider element
const timeSlider = document.getElementById('timeSlider');


function UpdateSlider(){
  // Set the maximum value of the time slider to the video duration

  if(audio != emptyAudio){
    audio.addEventListener('play', function() {
      timeSlider.setAttribute('max', audio.duration);
    });

    // Update the time slider value as the video plays
    audio.addEventListener('timeupdate', function() {
      timeSlider.value = audio.currentTime;
      CheckTime(audio.currentTime);
    });

    audio.addEventListener('ended', function() {
		if(audio.currentTime==audio.duration)
		   {
		    GoNext();
		   }
     // GoNext();
    });

    // Update the video playback time when the user changes the slider position
    timeSlider.addEventListener('input', function() {
      audio.currentTime = timeSlider.value;
      CheckTime(audio.currentTime);
    });
  }
}

function CheckPageItem(index){
  switch (index) {
    case 1:
      return img1;
      break;
    case 2:
      return img2;
      break;
    case 3:
      return img3;
      break;
    case 4:
      return img4;
      break;
    case 5:
      return img5;
      break;
    case 6:
      return img6;
      break;
    case 7:
      return img7;
      break;
    case 8:
      return img8;
      break;
    case 9:
      return img9;
      break;
    case 10:
      return img10;
      break;
    case 11:
      return img11;
      break;
    case 12:
      return img12;
      break;
    case 13:
      return img13;
      break;
    case 14:
      return img14;
      break;
    case 15:
      return img15;
      break;
    case 16:
      return img16;
      break;
    case 17:
      return img17;
      break;
    default:

  }
}

function ResetVideoVisibility(){
  vid1.style.visibility = 'hidden';
  vid2.style.visibility = 'hidden';
  vid3.style.visibility = 'hidden';
  vid4.style.visibility = 'hidden';
  vid5.style.visibility = 'hidden';
}

function ResetParagraph(){
	
      document.getElementById('Page3').style.visibility = 'hidden';
      document.getElementById('Page4').style.visibility = 'hidden';
      document.getElementById('Page5').style.visibility = 'hidden';
      document.getElementById('Page6').style.visibility = 'hidden';
    /*   document.getElementById('Page7').style.visibility = 'hidden';
      document.getElementById('Page8').style.visibility = 'hidden';
     document.getElementById('Page9').style.visibility = 'hidden';
      document.getElementById('Page10').style.visibility = 'hidden';
      document.getElementById('Page11').style.visibility = 'hidden';
      document.getElementById('Page12').style.visibility = 'hidden';
      document.getElementById('Page13').style.visibility = 'hidden';
      document.getElementById('Page14').style.visibility = 'hidden';
      document.getElementById('Page15').style.visibility = 'hidden';*/
}
