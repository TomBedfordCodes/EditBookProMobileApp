import {appAddedProjectsInDB } from "/index.js"
import { ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const addBtn = document.getElementById("add-btn")
const projnameInputEl = document.getElementById("projname-input")
const pubInputEl = document.getElementById("pub-input")
const feeInputEl = document.getElementById("fee-input")
const deadlineInputEl = document.getElementById("deadline-input")
const arrivalInputEl = document.getElementById("arrival-input")
const fillFieldsWarningEl = document.getElementById("fill-fields-warning")
const cancelBtn = document.getElementById("cancel-btn")



// event listeners
if (addBtn) {
    addBtn.addEventListener("click", function() {
        if (
            !projnameInputEl.value ||
            !pubInputEl.value ||
            !feeInputEl.value ||
            !deadlineInputEl.value ||
            !arrivalInputEl.value
            ) {
            showWarning()
            setTimeout(hideWarning, 3500)
            return
        }
        addProjectToDB(
            projnameInputEl.value,
            pubInputEl.value,
            feeInputEl.value,
            deadlineInputEl.value,
            arrivalInputEl.value
            )
        returnToHomepage()
    })
}

if (cancelBtn) {
    cancelBtn.addEventListener("click", function() {
        returnToHomepage()
    })
}


// functions
function hideWarning() {
    fillFieldsWarningEl.hidden = true
}

function showWarning() {
    fillFieldsWarningEl.hidden = false
}


function addProjectToDB(
    projname,
    pub,
    fee,
    deadline,
    arrival
    ) {
        let projObject = {
            "projname": projname,
            "pub": pub,
            "fee": fee,
            "deadline": deadline,
            "arrival": arrival
        }
        push(appAddedProjectsInDB, projObject)
}


function returnToHomepage() {
    window.location = "index.html"
}


