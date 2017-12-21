
var plot; // passes the Id from the ListOfPost array
var listOfPost = ["OcShiftOne","OcShiftTwo" ,"OcShiftThree","LanShiftOne" ,"ChcShiftOne" ,"PcpcShiftOne" ,"PcpcShiftTwo" ,"PcpcShiftThree" , "PcpcShift" , "CreeWoodShift" ,"DYardShift" , "KllmShiftOne" , "KllmShiftTwo" , "LifePatrolShiftOne" ];
var OfficerOnDuty = [ ];
var space = " <br><br>"
// the array are set to the id's of the Form!
	var Post =  ["Slot1", "Slot2","Slot3","Slot4" , "Slot5" , "Slot6" , "Slot7", "LanPosOne" , "LanPosTwo" , "LanPosThree" , "LanPosFour" , "LanPosFive" , "LanPosSix" , "LanPosSeven",
	"Chc1","Chc2" ,"Chc3" ,"Chc4" ,"Chc5" , "Chc6", "Chc7","Pc1","Pc2","Pc3","Pc4","Pc5","Pc6","Pc7","P1","P2","P3","P4","P5","P6","P7",
	"Creek1","Creek2","Creek3","Creek4","Creek5","Creek6","Creek7","Dy1","Dy2","Dy3","Dy4","Dy5","Dy6","Dy7",
	"Kl1","Kl2","Kl3","Kl4","Kl5","Kl6","Kl7","Lf1","Lf2","Lf3","Lf4","Lf5","Lf6","Lf7"];
	
// keys to officer
	var keys = ["4400","4401","4402","4403","4406","4407","4408","Lan1","Lan2","Lan3","Lan4","Lan5","Lan6","Lan7","Ch1","Ch2","Ch3","Ch4","Ch5","Ch6","Ch7",
	"Pc1","Pc2","Pc3","Pc4","Pc5","Pc6","Pc7","Ppc1","Ppc2","Ppc3","Ppc4","Ppc5","Ppc6","Ppc7" ,"Cree1","Cree2","Cree3","Cree4","Cree5","Cree6","Cree7",
	"Dyard1","Dyard2","Dyard3","Dyard4","Dyard5","Dyard6","Dyard7","Klm1","Klm2","Klm3","Klm4","Klm5","Klm6","Klm7","Lp1","Lp2","Lp3","Lp4","Lp5","Lp6","Lp7"];


var OfficerData;






function main(){
var timeCounter = 0;	
var AssignedPost = "";	

	
	
	
	// these allow on click to abilitry to change the shift that officer need to work.
	  document.getElementById("OcShiftOne").onclick = function GrabId(){plot = listOfPost[0];          AcquireTime(); }
	  document.getElementById("OcShiftTwo").onclick = function GrabId(){plot = listOfPost[1];          AcquireTime(); }
      document.getElementById("OcShiftThree").onclick = function GrabId(){plot = listOfPost[2];        AcquireTime(); }
	  document.getElementById("LanShiftOne").onclick = function GrabId(){plot = listOfPost[3];         AcquireTime(); }
	  document.getElementById("ChcShiftOne").onclick = function GrabId(){plot = listOfPost[4];         AcquireTime(); }
	  document.getElementById("PcpcShiftOne").onclick = function GrabId(){plot = listOfPost[5];        AcquireTime();}
	  document.getElementById("PcpcShiftTwo").onclick = function GrabId(){plot = listOfPost[6];        AcquireTime();}
	  document.getElementById("PcpcShiftThree").onclick = function GrabId(){plot = listOfPost[7];      AcquireTime();}
	  document.getElementById("PcpcShift").onclick = function GrabId(){plot = listOfPost[8];           AcquireTime();}
	  document.getElementById("CreeWoodShift").onclick = function GrabId(){plot = listOfPost[9];       AcquireTime();}
	  document.getElementById("DYardShift").onclick = function GrabId(){plot = listOfPost[10];         AcquireTime();}
	  document.getElementById("KllmShiftOne").onclick = function GrabId(){plot = listOfPost[11];       AcquireTime();}
	  document.getElementById("KllmShiftTwo").onclick = function GrabId(){plot = listOfPost[12];       AcquireTime();}
	  document.getElementById("LifePatrolShiftOne").onclick = function GrabId(){plot = listOfPost[13]; AcquireTime();}
	 
	 // this code allows the user to place officer on on shift based on clicks
	 
	AssignedPost = document.getElementById("Slot1").onclick = function(){ AssignedPost= "Slot1";     timeCounter = 3; AssignOfficer( AssignedPost,timeCounter);  };
	AssignedPost = document.getElementById("Slot2").onclick = function() { AssignedPost = "Slot2";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
	AssignedPost = document.getElementById("Slot3").onclick = function(){ AssignedPost= "Slot3";     timeCounter = 3;  AssignOfficer( AssignedPost,timeCounter);  };
	AssignedPost = document.getElementById("Slot4").onclick = function() { AssignedPost = "Slot4";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
	AssignedPost = document.getElementById("Slot5").onclick = function(){ AssignedPost= "Slot5";     timeCounter = 3; AssignOfficer( AssignedPost,timeCounter);  };
	AssignedPost = document.getElementById("Slot6").onclick = function() { AssignedPost = "Slot6";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
	AssignedPost = document.getElementById("Slot7").onclick = function() { AssignedPost = "Slot7";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };

	// 954 Life
		AssignedPost = document.getElementById("LanPosOne").onclick = function() { AssignedPost = "LanPosOne";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	    AssignedPost = document.getElementById("LanPosTwo").onclick = function() { AssignedPost = "LanPosTwo";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("LanPosThree").onclick = function() { AssignedPost = "LanPosThree";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("LanPosFour").onclick = function() { AssignedPost = "LanPosFour";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("LanPosFive").onclick = function() { AssignedPost = "LanPosFive";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("LanPosSix").onclick = function() { AssignedPost = "LanPosSix";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("LanPosSeven").onclick = function() { AssignedPost = "LanPosSeven";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	//chc
	    AssignedPost = document.getElementById("Chc1").onclick = function() { AssignedPost = "Chc1";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	    AssignedPost = document.getElementById("Chc2").onclick = function() { AssignedPost = "Chc2";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Chc3").onclick = function() { AssignedPost = "Chc3";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Chc4").onclick = function() { AssignedPost = "Chc4";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Chc5").onclick = function() { AssignedPost = "Chc5";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Chc6").onclick = function() { AssignedPost = "Chc6";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Chc7").onclick = function() { AssignedPost = "Chc7";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	
	// PCP Three Post Times Almars, Outsid and Malls
	
        AssignedPost = document.getElementById("Pc1").onclick = function() { AssignedPost = "Pc1";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
	    AssignedPost = document.getElementById("Pc2").onclick = function() { AssignedPost = "Pc2";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Pc3").onclick = function() { AssignedPost = "Pc3";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Pc4").onclick = function() { AssignedPost = "Pc4";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Pc5").onclick = function() { AssignedPost = "Pc5";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Pc6").onclick = function() { AssignedPost = "Pc6";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Pc7").onclick = function() { AssignedPost = "Pc7";   timeCounter = 3; AssignOfficer(AssignedPost,timeCounter); };
	
       // Single Pcpc	
         AssignedPost = document.getElementById("P1").onclick = function() { AssignedPost = "P1";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	    AssignedPost = document.getElementById("P2").onclick = function() { AssignedPost = "P2";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("P3").onclick = function() { AssignedPost = "P3";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("P4").onclick = function() { AssignedPost = "P4";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("P5").onclick = function() { AssignedPost = "P5";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("P6").onclick = function() { AssignedPost = "P6";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("P7").onclick = function() { AssignedPost = "P7";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	


	// CreekWood
	
        AssignedPost = document.getElementById("Creek1").onclick = function() { AssignedPost = "Creek1";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	    AssignedPost = document.getElementById("Creek2").onclick = function() { AssignedPost = "Creek2";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Creek3").onclick = function() { AssignedPost = "Creek3";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Creek4").onclick = function() { AssignedPost = "Creek4";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Creek5").onclick = function() { AssignedPost = "Creek5";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Creek6").onclick = function() { AssignedPost = "Creek6";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Creek7").onclick = function() { AssignedPost = "Creek7";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		

	
	//Dyar

        AssignedPost = document.getElementById("Dy1").onclick = function() { AssignedPost = "Dy1";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	    AssignedPost = document.getElementById("Dy2").onclick = function() { AssignedPost = "Dy2";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Dy3").onclick = function() { AssignedPost = "Dy3";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Dy4").onclick = function() { AssignedPost = "Dy4";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Dy5").onclick = function() { AssignedPost = "Dy5";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Dy6").onclick = function() { AssignedPost = "Dy6";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Dy7").onclick = function() { AssignedPost = "Dy7";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		
	
	//KLLM


         AssignedPost = document.getElementById("Kl1").onclick = function() { AssignedPost = "Kl1";   timeCounter = 2; AssignOfficer(AssignedPost,timeCounter); };
	     AssignedPost = document.getElementById("Kl2").onclick = function() { AssignedPost = "Kl2";   timeCounter = 2; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Kl3").onclick = function() { AssignedPost = "Kl3";   timeCounter = 2; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Kl4").onclick = function() { AssignedPost = "Kl4";   timeCounter = 2; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Kl5").onclick = function() { AssignedPost = "Kl5";   timeCounter = 2; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Kl6").onclick = function() { AssignedPost = "Kl6";   timeCounter = 2; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Kl7").onclick = function() { AssignedPost = "Kl7";   timeCounter = 2; AssignOfficer(AssignedPost,timeCounter); };
		
	
	// LifePatrol
	
         AssignedPost = document.getElementById("Lf1").onclick = function() { AssignedPost = "Lf1";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
	    AssignedPost = document.getElementById("Lf2").onclick = function() { AssignedPost = "Lf2";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Lf3").onclick = function() { AssignedPost = "Lf3";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Lf4").onclick = function() { AssignedPost = "Lf4";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Lf5").onclick = function() { AssignedPost = "Lf5";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Lf6").onclick = function() { AssignedPost = "Lf6";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		AssignedPost = document.getElementById("Lf7").onclick = function() { AssignedPost = "Lf7";   timeCounter = 1; AssignOfficer(AssignedPost,timeCounter); };
		
	
	
	
	}




  function PlotTime( placeMent){
	  var keyAssign = 0;
	  var time = document.getElementsByTagName("td");
	  var Shift = prompt("Please enter the time of the shift", "beginAM | EndPM");	
	  localStorage.setItem("dataOfOfficerLocation",Shift);
      document.getElementById(placeMent).innerHTML = Shift;
	  }

	
	// deals with placing Security officer at post 
function AssignOfficer(PostAssignment, slotsPerPost){
	var OfficerOnDuty;
	var OfficerGroup = [];
	var counter = 0;
	var keyAssign = 0;
	
	while(counter < slotsPerPost){
		OfficerOnDuty = prompt("Assign The first officer to the post:  ","X");
		OfficerGroup[counter] = OfficerOnDuty;
		// determine how many officer are asign to the post
		counter++;
	}
	if(slotsPerPost == 3){
	 OfficerOnDuty = OfficerGroup[0] + space + OfficerGroup[1] + space + OfficerGroup[2];
	 
	 // checks ids and stores data in localfiles based on ids;
	keyAssign = storedKeys(PostAssignment,keyAssign);
	 
	 localStorage.setItem(keys[keyAssign],OfficerOnDuty);
	 
	}
	else if(slotsPerPost == 2){
		
	OfficerOnDuty = OfficerGroup[0] + space + OfficerGroup[1];
	
	keyAssign = storedKeys(PostAssignment,keyAssign);
	 localStorage.setItem(keys[keyAssign],OfficerOnDuty);
	}
	 else {
		 
		 OfficerOnDuty = OfficerGroup[0];
		 keyAssign = storedKeys(PostAssignment,keyAssign);
		 localStorage.setItem(keys[keyAssign],OfficerOnDuty);
	 }
		 
	 
	post(PostAssignment, OfficerOnDuty);
	
	
}

function post(OfficerLocation, Officer){
	
	
	        
			
				 document.getElementById(OfficerLocation).innerHTML = Officer;
				 
		
	    
}

	
	
	function storedKeys(Idens,write){
		write = 0;
		// case is based on the id of the html file
		switch(Idens)
		{
			case "Slot1":
			write = 0;
			;
			 break;
			
			case "Slot2":
			write = 1;
			 
			 break;
			 
			 case "Slot3":
			 write = 2;
			 break;
			
			case "Slot4":
			write = 3;
			break;
			
			case "Slot5":
			write = 4;
			break;
			
			case "Slot6":
			write = 5;
			break;
			
			case "Slot7":
			write = 6;
			break;
			
			case "LanPosOne":
			write = 7;
			break;
			
			case "LanPosTwo":
			write = 8;
			break;
			
			case "LanPosThree":
			write = 9;
			break;
			
			case "LanPosFour":
			write = 10;
			break;
			
			case "LanPosFive":
			write = 11;
			break;
			
			case "LanPosSix":
			write = 12;
			break;
			
			case "LanPosSeven":
			write = 13;
			break;
			
			
			
			case "Chc1":
			write = 14;
			break;
			
			case "Chc2":
			write = 15;
			break;
			
			case "Chc3":
			write = 16;
			break;
			
			case "Chc4":
			write = 17;
			break;
			
			case "Chc5":
			write = 18;
			break;
			
			case "Chc6":
			write = 19;
			break;
			
			case "Chc7":
			write = 20;
			break;
			
			
			case "Pc1":
			write = 21;
			break;
			
			case "Pc2":
			write = 22;
			break;
			
			case "Pc3":
			write = 23;
			break;
			
			case "Pc4":
			write = 24;
			break;
			
			case "Pc5":
			write = 25;
			break;
			
			case "Pc6":
			write = 26;
			break;
			
			case "Pc7":
			write = 27;
			break;
			
		
			
			case "P1":
			write = 28;
			break;
			
			case "P2":
			write = 29;
			break;
			
			case "P3":
			write = 30;
			break;
			
			case "P4":
			write = 31;
			break;
			
			case "P5":
			write = 32;
			break;
			
			case "P6":
			write = 33;
			break;
			
			case "P7":
			write = 34;
			break;
			
			
			
			
			
			case "Creek1":
			write = 35;
			break;
			
			case "Creek2":
			write = 36;
			break;
			
			case "Creek3":
			write = 37;
			break;
			
			case "Creek4":
			write = 38;
			break;
			
			case "Creek5":
			write = 39;
			break;
			
			case "Creek6":
			write = 40;
			break;
			
			case "Creek7":
			write = 41;
			break;
			
			case "Dy1":
			write = 42;
			break;
			
			case "Dy2":
			write = 43;
			break;
			
			case "Dy3":
			write = 44;
			break;
			
			case "Dy4":
			write = 45;
			break;
			
			case "Dy5":
			write = 46;
			break;
			
			case "Dy6":
			write = 47;
			break;
			
			case "Dy7":
			write = 48;
			break;
			
			
			case "Kl1":
			write = 49;
			break;
			
			case "Kl2":
			write = 50;
			break;
			
			case "Kl3":
			write = 51;
			break;
			
			case "Kl4":
			write = 52;
			break;
			
			case "Kl5":
			write = 53;
			break;
			
			case "Kl6":
			write = 54;
			break;
			
			case "Kl7":
			write = 55;
			break;
			
			case "Lf1":
			write = 56;
			break;
			
			case "Lf2":
			write = 57;
			break;
			
			
			case "Lf3":
			write = 58;
			break;
			
			
			case "Lf4":
			write = 59;
			break;
			
			
			case "Lf5":
			write = 60;
			break;
			
			
			case "Lf6":
			write = 61;
			break;
			
			
			case "Lf7":
			write = 62;
			break;
			
			
			
		}
		return write;
	}
	
	
	
	
	
	function AcquireTime(){
		
		PlotTime(plot);
	}
	
	
function save(){
	var data;
	var Shift;
	
	var counter = 0;
	
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("write",Post[counter]);
		
	}
	//alert("your data has been saved");
	
	 Shift = document.getElementById(Post[0]).innerHTML ;
	
	 //localStorage.clear();
}

function load(){
	var counter = 0;
	var max = 63;
	//document.getElementById(Post[0]).innerHTML = localStorage.getItem(keys[0]);

	while(counter < max){
		//if(keys[counter] != null || "")
		
		
		if( localStorage.getItem(keys[counter]) != null || ""){
		document.getElementById(Post[counter]).innerHTML = localStorage.getItem(keys[counter]);
		
		}
		 counter++; 
	}
		
		
	
	main();
}


	

