const sendform = () => {
    const errorMessage = 'Что то пошло не так....',
        loadMesage = 'Идет загрузка... ',
        successMessage = 'Спасибо мы скоро с Вами свяжемся',

        statusMassege = document.createElement('div');
    statusMassege.style.cssText = 'font-size: 2rem;';
    //Переменные первой формы-->
    const form = document.getElementById('form1'),
        formName = document.getElementById('form1-name'),
        formEmail = document.getElementById('form1-email'),
        form1Phone = document.getElementById('form1-phone');
    //Переменные второй формы-->
    const  form2 = document.getElementById('form2'),
        formName2 = document.getElementById('form2-name'),
        formEmail2 = document.getElementById('form2-email'),
        form1Phone2 = document.getElementById('form2-phone'),
        formMessage2 = document.getElementById('form2-message');
    //Переменные третьей формы-->
    const form3 = document.getElementById('form3'),
        formName3 = document.getElementById('form3-name'),
        formEmail3 = document.getElementById('form3-email'),
        formPhone3 = document.getElementById('form3-phone');

    form.addEventListener('submit', event => {
        event.preventDefault();
        formName.value = '';
        formEmail.value = '';
        form1Phone.value = '';
        form.appendChild(statusMassege);
        statusMassege.textContent = loadMesage;
        const formData = new FormData(form);
        const body = {};
        for (const val of formData.entries()) {
            body[val[0]] = val[1];
        }

        postData(body)
            .then(respons => {
                if (respons.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMassege.textContent = successMessage;
            })
            .catch(error => {
                statusMassege.textContent = errorMessage;
                console.error(error);
            });
    });
    form2.addEventListener('submit', event => {
        event.preventDefault();
        formName2.value = '';
        formEmail2.value = '';
        form1Phone2.value = '';
        formMessage2.value = '';
        form2.appendChild(statusMassege);
        statusMassege.textContent = loadMesage;
        const formData = new FormData(form2);
        const body = {};
        for (const val of formData.entries()) {
            body[val[0]] = val[1];
        }
        postData(body)
            .then(respons => {
                if (respons.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMassege.textContent = successMessage;
            })
            .catch(error => {
                statusMassege.textContent = errorMessage;
                console.error(error);
            });
    });
    form3.addEventListener('submit', event => {
        event.preventDefault();
        formName3.value = '';
        formEmail3.value = '';
        formPhone3.value = '';
        form3.appendChild(statusMassege);
        statusMassege.style.color = 'white';
        statusMassege.textContent = loadMesage;
        const formData = new FormData(form3);
        const body = {};
        for (const val of formData.entries()) {
            body[val[0]] = val[1];
        }
        postData(body)
            .then(respons => {
                if (respons.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMassege.textContent = successMessage;
            })
            .catch(error => {
                statusMassege.textContent = errorMessage;
                console.error(error);
            });
    });


    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include',
    });

    function checkNameForm() {
        const form2Message = document.getElementById('form2-message');
        const form2Name = document.getElementById('form2-name');
        const form3Name = document.getElementById('form3-name');
        const form1Name = document.getElementById('form1-name');
        const showLog = function() {
            this.value = this.value.replace(/[^а-яё ]/gi, '');
        };
        form2Message.addEventListener('input', showLog);
        form2Name.addEventListener('input', showLog);
        form3Name.addEventListener('input', showLog);
        form1Name.addEventListener('input', showLog);
    }
    checkNameForm();

    function checkPhonForm() {
        const form3Phone = document.getElementById('form3-phone');
        const form2Phone = document.getElementById('form2-phone');
        const form1Phone = document.getElementById('form1-phone');
        const showPhone = function() {
            this.value = this.value.replace(/[^+0-9]/g, "");
        };
        form3Phone.addEventListener('input', showPhone);
        form1Phone.addEventListener('input', showPhone);
        form2Phone.addEventListener('input', showPhone);
    }
    checkPhonForm();

};

export default sendform;
