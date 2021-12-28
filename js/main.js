const color = document.querySelector("#color");
const salida = document.querySelector("#salida");

const storage = localStorage.getItem("colorValue") || "#ffffff";

const setColor = () => {
    const value = color.value;

    salida.innerHTML = value;
    salida.style.background = value;

    saveColor(value)
};
const saveColor = (value) => {
    localStorage.setItem("colorValue", value)
} 

color.addEventListener("input", setColor);

color.addEventListener("change", function(){
    saveColor(color.value)
}
);