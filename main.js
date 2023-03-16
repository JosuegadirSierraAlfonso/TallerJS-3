let myFormularioCampus = document.querySelector("#myFormularioCampus");
let formularyCampers = document.querySelector("#formularyCampers");
let formularyTrainers = document.querySelector("#formularyTrainers");
const select = document.querySelector("#options");
let opciones = document.querySelectorAll("[name='sede']");
let campus = {};


select.addEventListener("change", function(){
    if(select.value === "camper"){
        formularyCampers.style.display = "block"
        if(1 == 1){
            formularyTrainers.style.display = "none"
        }
        
    }
    if (select.value === "trainer") {
        formularyTrainers.style.display = "block"
        if(1 == 1){
            formularyCampers.style.display = "none"
        }
    }
});

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Adress: data.adress, Phone: data.phones, camper: [], trainer: []};
    opciones.forEach((item) => {
        listaSedes(item);
    })
    myFormularioCampus.reset();
})

let listaSedes = (elemt)=>{
    elemt.innerHTML = null;
    for (let [val] of Object.entries(campus)) {
        elemt.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

formularyCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["camper"].unshift(data);
    console.log(campus);
    formularyCampers.reset();
})

formularyTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["trainer"].unshift(data);
    console.log(campus);
    formularyTrainers.reset();
})