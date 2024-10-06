const form = document.getElementById('userForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        occupation: document.getElementById('occupation').value,
        nationality: document.getElementById('nationality').value,
        address: document.getElementById('address').value,
        comments: document.getElementById('comments').value,
    };

    fetch('https://script.google.com/macros/s/AKfycbypAsibrqEQSMV2rFpS7QALlre_3SiWID-G96rbTh1GT6ECiZiRxKyGShw_4ho5Y_H06A/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Form Submitted Successfully');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});