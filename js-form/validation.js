function validation(){
    var apn=document.getElementById("applicationTxt").value;
    var apn_regx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


    var fullName=document.getElementById("fullName").value;


    var email=document.getElementById("email").value;
    var email_regx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    var number=document.getElementById("number").value;
    var dob=document.getElementById("dob").value;
    var gender_0=document.getElementById("gender_0").value;
    var aadhar=document.getElementById("aadhar").value;
    var fName=document.getElementById("fName").value;
    var mName=document.getElementById("mName").value;
    var category=document.getElementById("category").value;
    var religionDrop=document.getElementById("religionDrop").value;
    var nationality=document.getElementById("nationality").value;
    var apn=document.getElementById("applicationTxt").value;
    var pAddress=document.getElementById("pAddress").value;
    var state=document.getElementById("stateTxt1").value;
    var city=document.getElementById("pCity").value;
    var pincode=document.getElementById("pPincode").value;
    var discipline=document.getElementById("program").value;
    var programme=document.getElementById("course").value;
    var tenBoardTxt=document.getElementById("tenBoardTxt").value;




    




    if(apn==""){
      document.getElementById('ctl07').innerHTML="** Please fill the Application number";
      return false;
    }

    if (apn_regx.test(applicationTxt)) {
      document.getElementById("ctl07").innerHTML =
        "** please Enter Valid application number";
      return false;
    }

    if(fullName==""){
        document.getElementById('ctl08').innerHTML="** Please fill the full name";
        return false;
      }


      if(!isNaN(fullName)){
        document.getElementById('ctl08').innerHTML="** Numbers Not Allowed";
        return false;
      }


    

    if(email==""){
        document.getElementById('ctl09').innerHTML="** Please fill the email address";
        return false;
      }

    
      if (email_regx.test(email)) {
        document.getElementById("email").innerHTML =
          "** please Enter Valid Email";
        return false;
      }

    if(number==""){
        document.getElementById('ctl10').innerHTML="** Please fill the Contact Number";
        return false;
      }

      if(isNaN(number)){
        document.getElementById('ctl10').innerHTML="** Characters not allowed";
        return false;

      }

    

    if(dob==""){
        document.getElementById('ctl11').innerHTML="** Please fill the dob";
        return false;
      }

      if(gender_0==""){
        document.getElementById('ctl12').innerHTML="** Please choose gender";
        return false;
      }

      if(aadhar==""){
        document.getElementById('ctl13').innerHTML="** Please fill the aadhar Number";
        return false;
      }

      if(fName==""){
        document.getElementById('ctl14').innerHTML="** Please fill the father Name";
        return false;
      }

      if(mName==""){
        document.getElementById('ctl15').innerHTML="** Please fill the mother's name";
        return false;
      }

      if(category==""){
        document.getElementById('ctl16').innerHTML="** Please choose the Category";
        return false;
      }

      if(religionDrop==""){
        document.getElementById('ctl17').innerHTML="** Please fill this field";
        return false;
      }

      if(nationality==""){
        document.getElementById('ctl18').innerHTML="** Please fill this field";
        return false;
      }

  
      if(pAddress==""){
        document.getElementById('ctl19').innerHTML="** Please fill the Address";
        return false;
      }
  
      if(state==""){
        document.getElementById('ctl20').innerHTML="** Please fill this field";
        return false;
      }
  
      if(city==""){
        document.getElementById('ctl21').innerHTML="** Please fill the city";
        return false;
      }
  
      if(pincode==""){
        document.getElementById('ctl22').innerHTML="** Please fill the pincode ";
        return false;
      }
  
      if(discipline==""){
        document.getElementById('ctl24').innerHTML="** Please fill this field";
        return false;
      }
  
      if(programme==""){
        document.getElementById('ctl25').innerHTML="** Please fill this field";
        return false;
      }

      if(tenBoardTxt==""){
        document.getElementById('tenBoardTxtValid').innerHTML="** Please fill this field";
        return false;
      }




      
  
  

      

    

    // return true ;

}