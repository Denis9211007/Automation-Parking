const singup_Button = document.getElementById("singUp_Button");
const login_btn = document.getElementById("login-btn");
const loginPage = document.querySelector(".side-login-page");
const  registerLandBtn = document.querySelector(".land_Btn")


 const submitForm = (event)=>{
    const link = document.getElementById("singUp_Button");
    link.href = "/signup"
}

const login = () => {
    loginPage.classList.toggle("side-login-page-block")
}

const register = () => {
    document.querySelector(".register-land").classList.toggle("register-land-none")
}
var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality
$( "button.continue" ).html( "Next Step..." )
singup_Button.addEventListener("click",submitForm)
login_btn.addEventListener("click",login)
registerLandBtn.addEventListener("click",register)