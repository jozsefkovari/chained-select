/* Demo Data */
let cars = [
    {
        id: 1,
        name: 'Alfa Romea',
        model: [
            {
                id: 1,
                name: '145(930_)(1994-2001)'
            },
            {
                id: 2,
                name: '146(930_)(1994-2001)'
            },
            {
                id: 3,
                name: '147(937_)(2000-2010)'
            }
        ],
    },
    {
        id: 2,
        name: 'Aston Martin',
        model: [
            {
                id: 1,
                name: 'Cygnet(2011-2013)'
            },
            {
                id: 2,
                name: 'DB MKIII(1956-1959)'
            },
            {
                id: 3,
                name: 'DB11 VANTAGE(2019-)'
            },
            {
                id: 4,
                name: 'DB11 VOLANTE(2017-)'
            }
        ],
    }
];

let selectOne = document.querySelector('#select-one');
let selectTwo = document.querySelector('#select-two');

selectOne.innerHTML = `<option value="" hidden selected> - SELECT - </option>`;
cars.forEach( (e) => {
    selectOne.innerHTML += `<option value="${e.id}">${e.name}</option>`
})

selectOne.addEventListener('change', function(e) {
    let id = this.options[this.selectedIndex].value;
    selectTwo.innerHTML = '';
    cars[id - 1].model.forEach( (e) => {
        selectTwo.innerHTML += `<option value="${e.id}">${e.name}</option>`
    })
});
