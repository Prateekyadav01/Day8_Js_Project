

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let country = document.getElementById('country');
let score = document.getElementById('score');
let btnScore = document.getElementById('button1');

let dynamic = document.getElementById('dynamic');
// console.log(country, score);

let data = [];

btnScore.addEventListener('click', function (e) {

    let newData = {
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        score: score.value
    };

    data.push(newData);


    data.sort((a, b) => b.score - a.score);


    dataFetch()
})


function dataFetch() {
    if(data.length > 0){
        dynamic.innerHTML = '';

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');


    thead.innerHTML = `
    <tr>
        <th class="header-cell">First Name</th>
        <th class="header-cell">Last Name</th>
        <th class="header-cell">Country</th>
        <th class="header-cell">Score</th>
        <th class="header-cell">Action</th>
    </tr>
`;


    data.forEach(rowData => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td class="data-cell">${rowData.firstName}</td>
        <td class="data-cell">${rowData.lastName}</td>
        <td class="data-cell">${rowData.country}</td>
        <td class="data-cell">${rowData.score}</td>
        <td class="action-cell">
            <button class="delete-btn" onclick="handleDelete(this)">Delete</button>
            <button class="plus-btn" onclick="handlePlus(this)">+</button>
            <button class="minus-btn" onclick="handleMinus(this)">-</button>
        </td>
    `;
        tbody.appendChild(row);
    });


    table.classList.add('data-table');
    thead.classList.add('table-header');
    tbody.classList.add('table-body');

    table.appendChild(thead);
    table.appendChild(tbody);

    dynamic.appendChild(table);

    }
}

function handlePlus(button) {
    let row = button.parentElement.parentElement;
    let index = Array.from(row.parentElement.children).indexOf(row);
    console.log(data[index].score);
    data[index].score = parseInt(data[index].score) + 5;
    console.log(data[index].score);
    dataFetch();
}

function handleMinus(button) {
    let row = button.parentElement.parentElement;
    let index = Array.from(row.parentElement.children).indexOf(row);
    if (data[index].score > 5) {
        data[index].score = parseInt(data[index].score) - 5;
    }
    dataFetch();
}
function handleDelete(button) {
    let row = button.parentElement.parentElement;
    let index = Array.from(row.parentElement.children).indexOf(row);
    data.splice(index, 1);
    dataFetch();
}
