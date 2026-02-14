const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email-address');
const message = document.querySelector('#message');
const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');

function firstNameIsValid() {
    const errorMsg = document.querySelector('#first-name-error');

    if (firstName.value.trim() === "") {
        errorMsg.style.display = 'flex';
        firstName.style.borderColor='red';
        firstName.classList.add('input-error');
        return false;
    } else {
        errorMsg.style.display = 'none';
        firstName.classList.remove('input-error');
        return true;
    }
}

function lastNameIsValid() {
    const errorMsg = document.querySelector('#last-name-error');

    if (lastName.value.trim() === "") {
        errorMsg.style.display = 'flex';
        lastName.style.borderColor='red';
        lastName.classList.add('input-error');

        return false;
    } else {
        errorMsg.style.display = 'none';
        lastName.classList.remove('input-error');
        return true;
    }
}

function emailIsValid() {
    const errorMsg = document.querySelector('#email-error');
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        errorMsg.innerText = "This field is required";
        errorMsg.style.display = 'flex';
        email.style.borderColor='red';
        email.classList.add('input-error');
        return false;
    }

    if (!pattern.test(email.value.trim())) {
        errorMsg.innerText = "Please enter a valid email address";
        errorMsg.style.display = 'flex';
        email.classList.add('input-error');
        return false;
    }

    errorMsg.style.display = 'none';
    email.classList.remove('input-error');
    return true;
}

function messageIsValid() {
    const errorMsg = document.querySelector('#message-error');

    if (message.value.trim() === "") {
        errorMsg.style.display = 'flex';
        message.classList.add('input-error');
        message.style.borderColor='red';
        return false;
    } else {
        errorMsg.style.display = 'none';
        message.classList.remove('input-error');
        return true;
    }
}

function validateRadios() {
    const labels = document.querySelectorAll('.radio-group label');
    const errorMsg = document.querySelector('#query-type-error');
    const checked = document.querySelector('input[name="query"]:checked');

    if (!checked) {
        errorMsg.style.display = 'flex';
        labels.forEach(label => label.classList.add('input-error'));
        
        return false;

    } else {
        errorMsg.style.display = 'none';
        labels.forEach(label => label.classList.remove('input-error'));
        return true;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid =
        firstNameIsValid() &&
        lastNameIsValid() &&
        emailIsValid() &&
        messageIsValid() &&
        validateRadios();

    if (isValid) {
        const toast = document.getElementById('success-toast');
        toast.classList.add('show');

        // Hide toast after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);

        // Clear fields
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        message.value = "";
        document.querySelectorAll('input[name="query"]').forEach(r => r.checked = false);
        document.querySelector('.consent-group input').checked = false;
    }
});



[firstName, lastName, email, message].forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('input-error');
        const error = input.parentElement.querySelector('.error-msg');
        if (error) error.style.display = 'none';
    });
});
