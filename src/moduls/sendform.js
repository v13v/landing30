const sendform = () => {
    const errorMessage = 'Что то пошло не так....'
    const loadMesage = 'Идет загрузка... '
    const successMessage = 'Спасибо мы скоро с Вами свяжемся'

    const statusMessage = document.createElement('div')
    statusMessage.style.cssText = 'font-size: 2rem;'

    const formValidate = event => {
        const {target} = event
        if(target.name === 'user_name' || target.name === 'user_message') {
            target.value = target.value.replace(/[^А-Яа-яёЁ\s]/, "")
        } else if(target.name === 'user_email') {
            target.value = target.value.replace(/[А-Яа-яёЁ\s]/, "")
        } else if(target.name === 'user_phone') {
            target.value = target.value.replace(/[^0-9+]/, "")
        }
    }

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
    })

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('input', formValidate)
        form.addEventListener('submit', e => {
            e.preventDefault()
            const {target} = e
            target.append(statusMessage)
            statusMessage.textContent = loadMesage

            const formData = new FormData(target)
            const body = {}
            formData.forEach((val, key) => {
                body[key] = val
            })

            postData(body)
                .then(response => {
                    if(response.status !== 200) {
                        throw new Error('status network not 200')
                    }
                    statusMessage.textContent = successMessage;
                    let times = setTimeout(() => {
                        statusMessage.textContent = ``
                        clearTimeout(times)
                    }, 5000)
                })
        })
    })
};

export default sendform;