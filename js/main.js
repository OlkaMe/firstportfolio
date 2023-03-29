const btnDarkMode=document.querySelector(".dark-mode-btn");

//Проверка темной темы на уровне системных настроек

if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn_active");
    document.body.classList.add("dark");
}

//Проверка темной темы в локальном хранилище

if(localStorage.getItem("darkMode")==="dark"){
    btnDarkMode.classList.add("dark-mode-btn_active");
    document.body.classList.add("dark");
}
else if(localStorage.getItem("darkMode")==="light")
{
    btnDarkMode.classList.remove("dark-mode-btn_active");
    document.body.classList.remove("dark");
}

//Если меняются системные настройки, меняем тему

window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change",(event)=>{
    const newColoreSheme = event.matches ? "dark": "light";
    alert("change!!");
    if(newColoreSheme==="dark"){
        btnDarkMode.classList.add("dark-mode-btn_active");
        document.body.classList.add("dark");
    }
    else{
        btnDarkMode.classList.remove("dark-mode-btn_active");
        document.body.classList.remove("dark");
    }
})

//Включение ночного режима по кнопке

btnDarkMode.onclick=function (){
    btnDarkMode.classList.toggle("dark-mode-btn_active");
    const isDark=document.body.classList.toggle("dark");
    if(isDark){
        localStorage.setItem("darkMode", "dark")
        } else
    {
        localStorage.setItem("darkMode", "light")
    }
}

