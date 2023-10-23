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

singup_Button.addEventListener("click",submitForm)
login_btn.addEventListener("click",login)
registerLandBtn.addEventListener("click",register)