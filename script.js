'use strict';

function ElementCreator () {
    let app = document.querySelector('#app');
    this.values = JSON.parse(localStorage.getItem('values'));
    if (typeof this.values != 'object' || this.values == null) {
        this.values = {};
    }

    this.amount = localStorage.getItem('amount');
    if (this.amount == null) {
        this.amount = 42;
    }
     
    let obj = this;
    let addButton = function (id, number) {
        let button = document.createElement('a');
        button.setAttribute('href', '#');
        button.textContent = number;
        button.classList.add('btn');

        if (number % 3 == 0) {
            button.classList.add('red');
        }

        button.addEventListener('click', function () {
            number++;
            this.textContent = number;
            obj.values[id] = number;
            if (number % 3 == 0) {
                button.classList.add('red');
            }
            else if(button.classList.contains('red')) {
                button.classList.remove('red');
            }

            localStorage.setItem("values", JSON.stringify(obj.values));
            console.log(this.textContent);
        });

        app.append(button);
    };


    this.addAllButtons = function () {
        localStorage.setItem('amount', this.amount);
        app.textContent = '';
        for (let i = 1; i <= this.amount; i++) {
            if (this.values[i]) {
                addButton(i, this.values[i]);
            }
            else {
                addButton(i, i);
            }
        }
    }
};

let html = new ElementCreator();

html.addAllButtons();

document.getElementById('42_task_form').addEventListener('submit', function(event) {
    event.preventDefault();
    let input = this.querySelector('[name=number]');
    html.amount = input.value;

    html.values = {};
    localStorage.clear();
    
    html.addAllButtons();

    input.value = '';
});



/*
function test1 (who) {
    console.log(this + " " + who);
}

test1.bind('Hello')('world');
*/


