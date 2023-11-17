const form = document.getElementById('form');
const alertMessage = document.getElementById('alertMessage');


form.onsubmit = async e => {
    e.preventDefault();

    let inputData = {
        mail: form.mail,
        pass: form.password
    }

    const request = await fetch(`https://raw.githubusercontent.com/Ralfard/intensive_by_React_HW1/main/userData.json`);
    const data = await request.json();

    dataСomparison(data, inputData);

}






function dataСomparison(arr, inputValue) {
    let searchMail = arr.find((item, index, arr) => {
        return item.mail === inputValue.mail.value
    })
    if (searchMail.pass === inputValue.pass.value) {
        alertMessage.innerText = "";
        alert('Вы авторизованы');
    }
    else alertMessage.innerText = "Введен не правильный E-mail или пароль.";
}



// let accounts = [
//     {
//         mail: "example@mail.ru",
//         pass: "qwerty09887"
//     },
//     {
//         mail: "asdfg@mail.ru",
//         pass: "zxcvb457893"
//     },
//     {
//         mail: "qwerty@mail.ru",
//         pass: "asdfg12345"
//     }
// ];
