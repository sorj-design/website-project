

/* NAV MENU */

const hamburger =document.querySelector('#favcon');
const navMenu =document.querySelector('.nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})


/*   REGISTRATION FORM  */

const form =document.forms.registration;
const fullname =form.fullname;
const email =form.email;
const phone =form.phone;
const register =document.getElementById('register')



register.addEventListener('click', (e)=>{
  e.preventDefault();
  validation();
  
})


function validation(){

  if(fullname.value ===''){
  document.getElementById('error-name').innerText="Full name required";
  document.getElementById('error-name').style.color='red';
  document.getElementById('error-name').style.display='block';
}

else if(email.value ===''){
  document.getElementById('error-email').innerText="Email Addres required";
  document.getElementById('error-email').style.color='red';
  document.getElementById('error-email').style.display='block';
}


else if(phone.value ===''){
  document.getElementById('error-phone').innerText="Phone Number required";
  document.getElementById('error-phone').style.color='red';
  document.getElementById('error-phone').style.display='block';
}
else{
  document.getElementById('error-name').innerText="";
  document.getElementById('error-email').innerText="";
  document.getElementById('error-phone').innerText="";
  console.log('Name' + fullname.value);
  console.log('Email' + email.value);
  console.log('Phone' + phone.value);
  fullname.value ="";
  email.value="";
  phone.value="";
}
}
