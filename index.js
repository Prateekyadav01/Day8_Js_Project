

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let country = document.getElementById('country');
let score = document.getElementById('score');
let btnScore = document.getElementById('button1');

let dynamic = document.getElementById('dynamic');
// console.log(country, score);



btnScore.addEventListener('click', function(e){
    let div1 = document.createElement('div');

    div1.innerHTML =`
    <table>
         <thead>
             <tr>
                   <th>${firstName.value}</th>
                   <th>${lastName.value}</th>
                   <th>${country.value}</th>
                   <th>${score.value}</th>
                   <th><button onCL>delete</button></th>
                    </tr>
                </thead>
                <tbody id="tbody">
                </tbody>
            </table>
    `

dynamic.appendChild(div1);
})


