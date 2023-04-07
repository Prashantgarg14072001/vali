$(document).ready(function() {
  $('#btn-file-reset-id').on('click', function() {
      $('#file').val('');
    });
});

$(document).ready(function() {
  $('#btn-img-reset-id').on('click', function() {
      $('#img').val('');
    });
});


$(function () {
  $("#txtName").keypress(function (e) {
      var keyCode = e.keyCode || e.which;
      $("#errormsg").html("");
      var regex = /^[0-9]+$/;
      var isValid = regex.test(String.fromCharCode(keyCode));
      if (!isValid) {
          $("#errormsg").html("Only Numbers allowed");
      }


      return isValid;

  });
});


let u1_nameError = true;
let u2_nameError = true;
let u3_nameError = true;
let u4_nameError = true;
let u6_nameError = true;
let u7_nameError = true;







   function digitKeyOnly(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    if ((keyCode >= 37 && keyCode <= 40) || (keyCode == 8 || keyCode == 9 || keyCode == 13) || (keyCode >= 48 && keyCode <= 57)) {
      return true;
    }
    return false;
  }
  function fileValidation() {
    var fileInput =
        document.getElementById('file');

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions =
        /(\.doc|\.pdf)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
  }
  function fileValidation1() {
    var fileInput =
        document.getElementById('img');
    
    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions =
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
  }
function countrycodevalidation(){
  var country=document.getElementById('country1').value
  if(country==='select'){
    document.getElementById('countrycode').value=" "
  }
  if(country==='india'){
    document.getElementById('countrycode').value="+91"
  }
  if(country==='srilanka'){
    document.getElementById('countrycode').value="+94"
  }
  if(country==='nepal'){
    document.getElementById('countrycode').value="+977"
  }
  if(country==='pakistan'){
    document.getElementById('countrycode').value="+92"
  }

}

function u1() {
  var name = document.getElementById("t1").value;
            var letters1 = /^[A-Z][a-z0-9]+ [A-Z][a-z0-9]+ [A-Z][a-z0-9]+ [A-Z][a-z0-9]$/;
            var letters4 = /^[A-Z][a-z0-9]+ [A-Z][a-z0-9]+ [A-Z][a-z0-9]+$/;
            var letters = /^[A-Z][a-z0-9]+ [A-Z][a-z0-9]+$/;
            var letters2 = /^[A-Z][a-z0-9]+$/;
            var letters3 = /^[A-Z]+ [A-Z]+ [A-Z][a-z0-9]+$/;

            if (name == "") {
                document.getElementById("user1").innerHTML = "* Please fill the name field";
                u1_nameError = false;
                return false;
            }

            else if (name.length <= 2) {
                document.getElementById("user1").innerHTML =
                    "* User length must be between 2 and 20";
                u1_nameError = false;
                return false;
            }
            else if (!/^[A-Z]/.test(name)) {
                document.getElementById("user1").innerHTML = "* First Letter must be capital"
                u1_nameError = false;
            }

            else if (/(.)\1\1+/g.test(name)) {
                document.getElementById("user1").innerHTML = "*Repeated character are not allowed Please check again";
                u1_nameError = false;
                return false;
            }


            else if ((!letters.test(name)) && (!letters1.test(name)) && (!letters2.test(name)) && (!letters3.test(name)) && (!letters4.test(name))) {
                document.getElementById("user1").innerHTML =
                    "* First Letter Of Each Word Should Be Capital";
                u1_nameError = false;
                return false;
            }



            else if (name.charAt(0) == name.charAt(1) && name.charAt(1) == name.charAt(2)) {
                document.getElementById("user1").innerHTML = "** Please enter valid name";
                u1_nameError = false;
                return false;

            }

            else {
                document.getElementById("user1").innerHTML = "";
                u1_nameError = true;
            }
        }

function u2() {
  var email = document.getElementById("t2").value;
  var filter = /^\w+([\.-]?\w+)T*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;

  if (email == "") {
    document.getElementById("user2").innerHTML =
      "Please enter your user email id";
  } else if (!filter.test(email)) {
    document.getElementById("user2").innerHTML = "Invalid email";
  } else {
    document.getElementById("user2").innerHTML = "";
  }
}

function u4() {
  var name = document.getElementById("t3").value;
  var letters = /^[A-Z][a-z]+$/;
  if (name == "") {
      document.getElementById("user3").innerHTML = "* Please fill the name ";
      u4_nameError = false;
  }
  if (name == "") {
      document.getElementById("user3").innerHTML = "* Please fill the name ";
      u4_nameError = false;
  }


  else if (/\s/g.test(name)) {
      document.getElementById("user3").innerHTML = "*Space are not allowed";
      u4_nameError = false;
      return false;
  } else if (name.length <= 2 || name.length > 11) {
      document.getElementById("user3").innerHTML = "*  There should be Minimun 3 Characters and Maximum 10 Characters required";
      u4_nameError = false;
  } else if (!isNaN(name)) {
      document.getElementById("user3").innerHTML = "* Only characters are allowed";
      u4_nameError = false;
  }
  else if (!letters.test(name)) {
      document.getElementById("user3").innerHTML = "*Only First letter should be capital <br> *Numbers and special characters are Not Allowed ";
      u4_nameError = false;
  }
  else if (/(.)\1\1+/g.test(name)) {
      document.getElementById("user3").innerHTML = "*Repeated character are not allowed please fill correctly";
      u4_nameError = false;
      return false;
  }


  else {
      document.getElementById("user3").innerHTML = "";
      u4_nameError = true;
  }
}



function u3(){
  var pass = document.getElementById('t4').value;
  var pwd_expression =  /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


if(pass == ""){
  document.getElementById('passwords').innerHTML =
  "** Please fill the password field";
  u3_nameError=false;
  return false;
}
else if((pass.length <= 6) || (pass.length > 15)) {
  document.getElementById('passwords').innerHTML =
  "** Passwords length must be between  6 and 15";
  u3_nameError=false;
  return false; 
}
else if(!pwd_expression.test(pass)){
  document.getElementById('passwords').innerHTML =
  "* Password must include one upper case letters <br> *Password must include one lower case letters <br> *and one special characters <br> *Must be one number";
  u3_nameError=false;
  return false;
}
      else{
  document.getElementById('passwords').innerHTML = "";
  u3_nameError=true;
}
   
}

   
      function u7() {
        var name = document.getElementById("t8").value;
        var letters = /^[A-Z][a-z]+$/;
        if (name == "") {
            document.getElementById("user8").innerHTML = "* Please fill the name ";
            u7_nameError = false;
        }
         if (name == ".") {
            document.getElementById("user8").innerHTML = " ";
            u7_nameError = false;
        }
        else if (/\s/g.test(name)) {
            document.getElementById("user8").innerHTML = "*Space are not allowed";
            u7_nameError = false;
            return false;
        } else if (name.length <= 3) {
            document.getElementById("user8").innerHTML = "* There should be Minimun 3 characters required";
            u7_nameError = false;
        } else if (!isNaN(name)) {
            document.getElementById("user8").innerHTML = "* only characters are allowed";
            u7_nameError = false;

        }
        else if (/(.)\1\1+/g.test(name)) {
            document.getElementById("user8").innerHTML = "* Repeated character are not allowed Please check again";
            u7_nameError = false;
            return false;
        }
        else if (!letters.test(name)) {
            document.getElementById("user8").innerHTML = "** First letter should be capital ";
            u7_nameError = false;
        }
        else {
            document.getElementById("user8").innerHTML = "";
            u7_nameError = true;
        }
    }

  
function validate2() {
  u1();
  u2();
  u3();
  u4();
  u6();
  u7();
 
 
   if (
    u1_nameError == true &&
    u2_nameError == true &&
    u3_nameError == true &&
    u4_nameError == true &&
    u6_nameError == true &&
    u7_nameError == true 

  ) 
  {
                         
        alert(' welcome ');
    
    return true;
  } else {
    return false;
  }
}