function validateMobile() {
     // console.log("mobile");
     var mobile = document.getElementById("contact").value;
     console.log(mobile);
     if (mobile === '') {
          // alert("Invalid Mobile number ");
          document.getElementById("error_message").innerHTML = "Invalid Mobile Number ";
          document.getElementById("contact").classList.add("error");
     }
     else {
          console.log(mobile.length);
          if (mobile.length !== 10) {
               // alert("Invalid Mobile number ");
               document.getElementById("error_message").innerHTML = "Invalid Mobile Number ";
               document.getElementById("contact").classList.add("error");
          }
          else {
               document.getElementById("error_message").innerHTML = "";
               document.getElementById("contact").classList.remove("error");

          }
     }
}


function validateEmail() {
     console.log("Email ");
     var email = document.getElementById('email').value;
     console.log(email);
     var result = email.indexOf('@') < 0 ? false : true;
     var result2 = email.indexOf('.com') < 0 ? false : true;
     console.log(result);
     if (result === false || result2 === false) {
          // alert("Invalid email address ");
          document.getElementById('email_message').innerHTML = "Invalid Email Address";
          document.getElementById('email').classList.add("error");
     }
     else {
          document.getElementById('email_message').innerHTML = "";
          document.getElementById('email').classList.remove("error");
     }
}

function validatepassword() {
     // console.log("password");
     var password1 = document.getElementById("password").value;
     console.log(password1);
     if (password1 === '') {
          // alert("Invalid password ");
          document.getElementById("error_password").innerHTML = "Invalid password ";
          document.getElementById("password").classList.add("error");
     }
     else {
          console.log(password1.length);
          if (password1.length <= 7) {
               // alert("Invalid password");
               document.getElementById("error_password").innerHTML = "Invalid password ";
               document.getElementById("password").classList.add("error");
          }
          else {
               document.getElementById("error_password").innerHTML = "";
               document.getElementById("password").classList.remove("error");

          }
     }
}

function validatepincode() {
     //  console.log("pincode");
     var pincode1 = document.getElementById("pincode").value;
     console.log(pincode1);
     if (pincode1 === '') {
          // alert("invalide pincode");
          document.getElementById("error_pincode").innerHTML = "invalide pincode";
          document.getElementById("pincode").classList.add("error");
     }
     else {
          console.log(pincode1.length);
          if (pincode1.length <= 6 || pincode1.length >=7 ) {
               // alert("invalid pincode");
               document.getElementById("error_pincode").innerHTML = "invalide pincode";
               document.getElementById("pincode").classList.add("error");
          }
          else {
               document.getElementById("error_pincode").innerHTML = "invalide pincode";
               document.getElementById("pincode").classList.remove("error");
          }
     }
}

function validate() {
     validateMobile();
     validateEmail();
     validatepassword();
     validatepincode();
}
