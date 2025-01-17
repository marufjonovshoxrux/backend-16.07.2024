import {
    Product
} from "./components/Products.js";
import {
    reload
} from "./js/utils.js";
import {
    students
} from "./js/db.js";

const students_tbody = document.querySelector('.students_tbody')
const form = document.forms.namedItem('act_task')
const baseUrl = 'http://localhost:8080'



form.onsubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const student = {
        number: students.length,
        name: formData.get('name'),
        age: formData.get('age'),
        id: crypto.randomUUID()
    }


    if (student.name && student.name.trim().length == 0) {
        alert('Заполните форму');
        return;
    }

    fetch(baseUrl + '/todos', {
            method: 'POST',
            body: JSON.stringify(student)
        })
        .then(res => res);



    

    

   


    students.push(student);
    reload(students, students_tbody, Product);
}


fetch(baseUrl + '/todos')
    .then(res => res.json())
    .then(res => res)