const form = document.getElementById('form');
// const username = document.getElementById('username');
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const email = document.getElementById('email');
// const code = document.getElementById('code-input')
// const phone = document.getElementById('phone-input');
// const dob = document.getElementById('dob');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
// const fileValue= document.getElementById('file');
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     if(username === '' || fname ==='' || lname ==='' || email ==='' || password ==='' || password2 === '' || fileInput === '' || fileInput === '' || fullAddress === '' || searchValue ==='' || date ==='' || text ==='' || url === '' || dobInput ===''){
//         alert ("all feild are required");
//         return false;
//     }
// });


function validate(){
    const username= document.getElementById('username').value;
    const fnames= document.getElementById('fname').value;
    const lname= document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const dob= document.getElementById('dob').value;
    const codeinput= document.getElementById('code-input').value;
    const phoneinput= document.getElementById('phone-input').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const file = document.getElementById('file').value;
    const pdffileinput = document.getElementById('pdf-file-input').value;
    const address = document.getElementById('address').value;
    const languagedropdown = document.getElementById('language-dropdown').value;
    const male = document.getElementById('male').value;
    const female = document.getElementById('female').value;
    const search = document.getElementById('search').value;
    const text = document.getElementById('text').value;
    const url = document.getElementById('url').value;
    document.writeln("Your Info: => "+"<br>"+" Your name: "+ username +"<br>");
    document.writeln("Your First name: "+ fnames+"<br>");
    document.writeln("Your Last name: "+ lname +"<br>");
    document.writeln("Your Email address: "+ email +"<br>");
    document.writeln("Your Date Of Birth Is : "+ dob +"<br>");
    document.writeln("Your Country Code: "+ codeinput +"<br>");
    document.writeln("Your phone Number : "+ phoneinput +"<br>");
    document.writeln("Your Password : "+ password +"<br>");
    document.writeln("Your Confirm Password : "+ password2 +"<br>");
    document.writeln("Your Image File : "+ file+"<br>");
    document.writeln("Your Resume In PDF Formate : "+pdffileinput+"<br>");
    document.writeln("Your Address : "+address+"<br>");
    document.writeln("Your Language : "+languagedropdown+"<br>");
    document.writeln("Gender: "+male+"<br>");
    document.writeln("Gender: "+female+"<br>");
    document.writeln("Search Box: "+search+"<br>");
    document.writeln("text Box: "+text+"<br>");
    document.writeln("url Box: "+url+"<br>");

    if (fnb==false){
        alert('full name is invalid');
        return false;
}
else if (firstnb==false){
    alert('first name is invalid');
    return false;
}
else if (lastnb==false){
    alert('Last name is invalid');
    return false;
}else if(enb == false){
    alert('email is invalid');
    return false;
}
else if( passnb == false){
    alert('Password is invalid');
    return false;
}else if(passnbcon == false){
    alert('Password 2 is invalid');
    return false;
}else if(addnb==false){
    alert('Address is invalid');
      return false;
}
else{
alert('form is submitted')
return true;
}
 

}


let fnb = false;
let firstnb = false;
let lastnb = false;
let enb = false;
let passnb = false;
let passnbcon = false;
let addnb = false;

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }




// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const fnameValue = fname.value.trim();
//     const lnameValue = lname.value.trim();
//     const emailValue = email.value.trim();
//     // const codeValue = code-input.value.trim();
//     // const phoneValue = phone-input.value.trim();
//     const dobValue = dob.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();
//     // const fileValue= file.value.trim();


//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }
//     if(fnameValue === '') {
//         setError(fname, 'FirstName is required');
//     } else {
//         setSuccess(fname);
//     }
//     if(lnameValue === '') {
//         setError(lname, 'LastName is required');
//     } else {
//         setSuccess(lname);
//     }
   
//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }
//     if(dobValue === ''){
//         setError(dob, 'Email is required');
//     }else {
//         setSuccess(email);
//     }
//     // if(codeValue === '') {
//     //     setError(code-input, 'phone is required');
//     // }else {
//     //     setSuccess(code-input);
//     // }
//     // if(phoneValue === '') {
//     //     setError(phone-input, 'phone is required');
//     // } else {
//     //     setSuccess(phone-input);
//     // }
//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }
//     if(fileValue === ''){
//         setError(file), 'Photo is required';
//     }
//     else {
//         setSuccess(file);
//     }

// }

 function fullName(){
    const username = document.getElementById('username').value;
    let len = username.length;

    const re = /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/;
    if(len >= 16){
        document.getElementById('fullName').innerHTML = 'Name Should Be 16 Character';
    }else if(username.charAt(0) === ' '){
        document.getElementById('fullName').innerHTML = 'Not Start With Space';
    }else if(len <= 2){
        document.getElementById('fullName').innerHTML = 'Name Contain More Than 2 Character';
    }
    else if(re.test(username)){
        document.getElementById('fullName').innerHTML = '<div class="textColores">Success</div>';
        fnb=true;
    }else{
        document.getElementById('fullName').innerHTML = 'Invalid Name';
    }
 }
 username.addEventListener('keydown', (e) =>{
    if(e.key === ' '){
        e.preventDefault();
    }
 });
 
 function firstName(){
    const fname = document.getElementById('fname').value;
    let len = fname.length;
    const re = /^(?=.{1,50}$)[A-Z][a-z]+(?:['_.\s][a-z]+)*$/;
    if(len >= 20){
        document.getElementById('firstName').innerHTML = 'Name Should Be 20 Character';
    }else if(len <= 2){
        document.getElementById('firstName').innerHTML = 'Name Contain More Than 2 Character'
    }else if(re.test(fname)){
        document.getElementById('firstName').innerHTML = '<div class="textColores">Success</div>';;
        firstnb = true;
    }else{
        document.getElementById('firstName').innerHTML = 'Invalid Name';
    }
 }

 function lastName(){
    const lname = document.getElementById('lname').value;
    let len = lname.length;
    const re = /^[A-Za-z.]{1,15}$/gm;
    if(len >= 15){
        document.getElementById('lastName').innerHTML = 'Name Should Be 15 Character';
    }else if(len <= 0){
        document.getElementById('lastName').innerHTML = 'Last Name Enter At Least 1 character'
    }else if(re.test(lname)){
        document.getElementById('lastName').innerHTML = '<div class="textColores">Success</div>';;
        lastnb = true;
    }else{
        document.getElementById('lastName').innerHTML = 'Invalid Name';
    }
 }
 lname.addEventListener('keydown', (e) =>{
    if(e.key === ' '){
        e.preventDefault();
    }
 });

 function emailFunc(){
    const email = document.getElementById('email').value;
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(email)){
        document.getElementById('emailFunc').innerHTML = '<div class="textColores">Success</div>';
        enb = true;
    }else if(email.charAt(0) === ' '){
        document.getElementById('emailFunc').innerHTML = 'space not accept'
    }
    else{
        document.getElementById('emailFunc').innerHTML = 'Invalid Email';
    }
}
email.addEventListener('keydown', (e) =>{
    if(e.key === ' '){
        e.preventDefault();
    }
 });

  const countrySelect = document.getElementById("country-select");
 const phoneInput = document.getElementById("phone-input");
 const codeInput = document.getElementById("code-input");
 
 countrySelect.addEventListener("change", () => {
   const selectedCountry = countrySelect.value;
   let countryCode = "";
   var maxLength = "";

   switch(selectedCountry) {
     case "us":
       countryCode = "+1";
       phoneInput.setAttribute("maxlength", "10");
       phoneInput.setAttribute("minlength", "10");
       break;
     case "vietnam":
       countryCode = "+84";
       phoneInput.setAttribute("maxlength", "11");
       phoneInput.setAttribute("minlength", "7");
       break;
     case "india":
       countryCode = "+91";
       phoneInput.setAttribute("maxlength", "10");
       phoneInput.setAttribute("minlength", "10");
       break;
     case "china":
       countryCode = "+86";
       phoneInput.setAttribute("maxlength", "11");
       phoneInput.setAttribute("minlength", "11");
       break;
     case "uae":
       countryCode = "+971";
       phoneInput.setAttribute("maxlength", "9");
       phoneInput.setAttribute("minlength", "9");
       break;
     default:
       codeInput.value = "";
       return;
   }

   codeInput.value = countryCode;
   phoneInput.value = "";
   phoneInput.placeholder = "Enter your phone number";
   
   phoneInput.focus();
 });

 phoneInput.addEventListener("input", () => {
   const selectedCountry = countrySelect.value;
   const phoneNumber = phoneInput.value;
   const regex = getRegexForCountry(selectedCountry);
   
   if (phoneNumber.match(regex)) {
     phoneInput.setCustomValidity("");
   } else {
     phoneInput.setCustomValidity("Please enter a valid phone number for your selected  country.");
   }
 });

function passwordValidation(){

    const password = document.getElementById('password').value;
    const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(reg.test(password)){
        document.getElementById('passVal').innerHTML = '<div class="textColores">Success</div>';
        passnb = true;
    }else{
        document.getElementById('passVal').innerHTML = 'Invalid password';
    }

    return password
}


function showPass(){
    const password = document.getElementById('password');
    if (password.type === "password") {
       password.type = "text";
    }else{
        password.type = "password";
    }    
}


function passwordValidation2(){
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if(password === password2){
        document.getElementById('passVal2').innerHTML = '<div class="textColores">Success</div>';
        passnbcon = true;
    }else if(!(password.length === password2.length)){
        document.getElementById('passVal2').innerHTML = 'Password not match';
    }
}

function showPass2(){
    const password2 = document.getElementById('password2');
    if (password2.type === "password") {
       password2.type = "text";
    }else{
        password2.type = "password";
    }    
}

function fileValidation(){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else{
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

const pdfFileInput = document.getElementById("pdf-file-input");
		const pdfFileSubmit = document.getElementById("pdf-file-submit");
		const pdfFileValidationMessage = document.getElementById("pdf-file-validation-message");

		function validatePdfFile() {
			const pdfFile = pdfFileInput.files[0];
			if (pdfFile) {
				const pdfFileName = pdfFile.name;
				const pdfFileExtension = pdfFileName.split(".").pop().toLowerCase();
				if (pdfFileExtension === "pdf") {
					pdfFileValidationMessage.textContent = "PDF file selected.";
				} else {
					pdfFileValidationMessage.textContent = "&nsp;&nsp;&nsp;&nsp;&nsp;&nsp;Please select a PDF file.";
				}
			} else {
				pdfFileValidationMessage.textContent = "Please select a file.";
			}
		}

		pdfFileSubmit.addEventListener("click", validatePdfFile);

  function fullAddress(){
    const address = document.getElementById('address').value;
    let len = address.length;
    const re = /^[/\//a-zA-Z0-9\s,'-]*$/;
    if(len >= 100){
        document.getElementById('fulladd').innerHTML = 'Name Should Be 16 Character';
    }else if(address.charAt(0) === ' '){
        document.getElementById('fulladd').innerHTML = 'Not Start With Space';
    }else if(len <= 2){
        document.getElementById('fulladd').innerHTML = 'Name Contain More Than 2 Character'
    }
    else if(re.test(address)){
        document.getElementById('fulladd').innerHTML = '<div class="textColores">Success</div>';
        addnb = true;
    }else{
        document.getElementById('fulladd').innerHTML = 'Invalid Name';
    }
} 
const languageRegex = /^(en|fr|es|de|it)$/; // valid language codes

function validateLanguageSelection() {
  const dropdown = document.getElementById("language-dropdown");
  const selectedValue = dropdown.value;

  if (languageRegex.test(selectedValue)) {
    // The selected language is valid
    dropdown.classList.remove("error");
  } else {
    // The selected language is invalid
    dropdown.classList.add("error");
  }
}

function fetchData() {
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");

    if (maleRadio.checked) {
      console.log("User selected Male");
    } else if (femaleRadio.checked) {
      console.log("User selected Female");
    } else {
      console.log("User did not select a gender");
    }
  }

  (function() {

    const form = document.querySelector('#sectionForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }
    init();
    
})();

function searchValidation(){
    const searchValue = document.getElementById('search').value.trim();
    const reg = (/^[a-zA-Z*|\s*]{3,12}/g);
    
    if(searchValue === ' '){
        document.getElementById('searchAns').innerHTML = 'Provide Input'; 
    }else if(searchValue === ''){
        document.getElementById('searchAns').innerHTML = 'field is required';
    }
    else if(searchValue.length <= 1){
        document.getElementById('searchAns').innerHTML = 'Provide more than 5 Character';
    }else if(searchValue.length >= 250){
        document.getElementById('searchAns').innerHTML = 'Not More than 250 character';
    }else if(reg.test(searchValue)){
        document.getElementById('searchAns').innerHTML = '<div class="textColores">Success</div>';
    }
    else{
        document.getElementById('searchAns').innerHTML =  "Invalid Input";
    }
}


function searchPass(){
    let text = document.getElementById('search').value.trim();
    if(!(text === '')){
        let cleanQuery = text.replace(" ","+",text);
        let url='http://www.google.com/search?q='+cleanQuery;
        window.location.href=url;
    }
}


function textFieldValidation(){
    const text = document.getElementById('text').value;
    if(text === ''){
        document.getElementById('textAns').innerHTML = 'field required';
    }else if(text.charAt(0) === " "){
        document.getElementById('textAns').innerHTML = 'space not accepted';
    }else if(text.length <= 3){
        document.getElementById('textAns').innerHTML = 'must be more than 3 character';
    }else if(text.length >= 20){
        document.getElementById('textAns').innerHTML = 'it should be less than 20 character';
    }else{
        document.getElementById('textAns').innerHTML = '<div class="textColores">Success</div>';
    }
}


function urlValidation(){
    const url = document.getElementById('url').value;
    const reg = (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g);
    if(reg.test(url)){
        document.getElementById('urlAns').innerHTML = '<div class="textColores">Success</div>';
    }else if(url.charAt(0) === " "){
        document.getElementById('urlAns').innerHTML = 'Not start with space';
    }else if(url === ''){
        document.getElementById('urlAns').innerHTML = 'url is required';
    }else{
        document.getElementById('urlAns').innerHTML = 'Invalid Url';
    }
}


function myDateOfBirth(){
    const dob = document.getElementById('dob');
    const minDob = new Date('1950-01-01');
    const maxDob = new Date('2010-01-01');

    if(dob < minDob || dob > maxDob){
        document.getElementById("dateofbirth").innerHTML = "Please enter the given date";
    }else{
        document.getElementById("dateofbirth").innerHTML = " Date is Correct";
        return false;
    }
}