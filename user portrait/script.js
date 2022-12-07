const dateBithday = +prompt("Введіть свою рік народження");
const city = prompt("Введіть місто в якому проживаєте");
const sport = prompt("Введіть улюблений вид спорту");
let age;
let town;
let favoriteSport;

if (dateBithday) {
    age = 2022 - dateBithday;
} else {
    // alert(`Шкода, що ви не захотіли вводити свою дату народженя`);
    age =  "Шкода, що ви не захотіли вводити свою дату народженя";
}

if (city) {
    switch (city) {
        case "Київ":
            town = "Ти живеш у столиці України";
            break;
        case "Вашингтон":
            town = "Ти живеш у столиці США";
            break;
        case "Лондон":
            town = "Ти живеш у столиці Великої Британії";
            break;
        default:
            town = `Ти живеш у місті ${city}`;
            break;
    }
}
else {
//   alert(`Шкода, що ви не захотіли вводити своє місто`);
     town =  `Шкода, що ви не захотіли вводити своє місто`;
}

if (sport) {
    switch (sport) {
        case "Бадмінтон":
            favoriteSport = "Круто! Хочеш стати як Тоні Гунава";
            break;
        case "Шахи":
            favoriteSport = "Круто! Хочеш стати як Андрій Волокитін";
            break;
        case "Плавання":
            favoriteSport = "Круто! Хочеш стати як Михайло Романчук";
            break;
        default:
            favoriteSport = `Цікавий вид спорту ${sport}`;
            break;
    }
}
else {
    // favoriteSport = alert(`Шкода, що ви не захотіли вводити свій улюблений вид спорту`);
    favoriteSport =`Шкода, що ви не захотіли вводити свій улюблений вид спорту`;
}

alert(`Твій вік: ${age}
${town}
${favoriteSport}`);