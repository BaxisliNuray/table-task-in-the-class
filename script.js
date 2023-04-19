let students = [
    {
        fullName: "Nuray Baxisli",
        age: 21,
        email: "nuray@gmail.com"

    },
    {
        fullName: "Irada Gulaliyeva",
        age: 21,
        email: "irada@gmail.com"

    },
    {
        fullName: "Fidan Baratli",
        age: 21,
        email: "fidi@gmail.com"

    }
]


// let tableBody=document.querySelector("tbody")
// students.forEach(student=>{
//     let trName=document.createElement("tr")
//     // trName.document.classList.add("trname")


//     let tdName=document.createElement("td")
//     tdName.innerHTML=student.fullName

//     trName.append(tdName)
//     tableBody.append(trName)


//     let trage=document.createElement("tr")
//     // trName.document.classList.add("trname")


//     let tdage=document.createElement("td")
//     tdName.innerHTML=student.fullName

// })

let tableBody = document.querySelector("tbody")

students.forEach(elem => {
    let newRow = createRow(elem);
    tableBody.append(newRow)
})

function createRow({fullName, age, email}) {
    let row = document.createElement("tr")
    
    let nameTd = document.createElement("td")
    nameTd.innerText = fullName;
    
    let ageTd = document.createElement("td")
    ageTd.innerText = age;
    
    let mailTd = document.createElement("td")
    mailTd.innerText = email;
    
    row.append(nameTd, ageTd, mailTd)
    console.log(row)

    return row
}