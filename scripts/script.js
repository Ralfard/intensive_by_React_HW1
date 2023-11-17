const form = document.getElementById('form');
const alertMessage = document.getElementById('alertMessage');


/*async*/
form.onsubmit = e => {
    e.preventDefault();

    let inputData = {
        mail: form.mail,
        pass: form.password
    }


    //данный код получал раньше данные из файла на gitHub но в процессе я узнал что отправлять запросы на gitHub pages нельзя и переделал код
    // const request = await fetch(`https://raw.githubusercontent.com/Ralfard/intensive_by_React_HW1/main/userData.json`);
    // const data = await request.json();

    dataСomparison(accounts, inputData);
}



function dataСomparison(arr, inputValue) {

    const searchMail = arr.find((item, index, arr) =>
        item.mail === inputValue.mail.value
    )

    if (searchMail && searchMail.pass === inputValue.pass.value) {
        alertMessage.innerText = "";
        alert('Вы авторизованы');
    }
    else alertMessage.innerText = "Введен не правильный E-mail или пароль.";
}



const accounts = [
    {
        mail: "example@mail.ru",
        pass: "qwerty09887"
    },
    {
        mail: "asdfg@mail.ru",
        pass: "zxcvb457893"
    },
    {
        mail: "qwerty@mail.ru",
        pass: "asdfg12345"
    }
];
