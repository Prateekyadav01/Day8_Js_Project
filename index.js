

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let country = document.getElementById('country');
let score = document.getElementById('score');
let btnScore = document.getElementById('button1');

let dynamic = document.getElementById('dynamic');
// console.log(country, score);

let data=[];

btnScore.addEventListener('click', function(e){
    let div1 = document.createElement('div');
    let newData ={
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        score: score.value
    };

    data.push(newData);
   
    
    data.sort((a, b) => b.score - a.score);

    
    dataFetch()
})


function dataFetch (){
    dynamic.innerHTML = ''; // Clear previous table

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    // Table headers
    thead.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Score</th>
            <th>Action</th>
        </tr>
    `;

    // Table rows
    data.forEach(rowData => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${rowData.firstName}</td>
            <td>${rowData.lastName}</td>
            <td>${rowData.country}</td>
            <td>${rowData.score}</td>
            <td><button onclick="handleDelete(this)">delete</button></td>
            <td><button onclick="handlePlus(this)">+</button></td>
            <td><button onclick="handleminus(this)">-</button></td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    dynamic.appendChild(table);
}

function handlePlus(button){
    let row = button.parentElement.parentElement;
    let index = Array.from(row.parentElement.children).indexOf(row);
    console.log(data[index].score);
    data[index].score = parseInt(data[index].score) + 5;
    console.log(data[index].score);
    dataFetch();
}

function handleminus(button){
    let row = button.parentElement.parentElement;
    let index = Array.from(row.parentElement.children).indexOf(row);
   if(data[index].score > 5){
    data[index].score = parseInt(data[index].score) - 5;
   }
    dataFetch();
}
function handleDelete(button){
    let row = button.parentElement.parentElement;
    let index = Array.from(row.parentElement.children).indexOf(row);
    data.splice(index, 1);
    dataFetch();
}
