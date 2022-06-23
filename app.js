// HW_1*
// Задания с разным количеством звездочек:)


//*** Вспомогательные функции ***
const checkArgs = (args, checkType = 'checkArgsValuesIsNumber') => {
    let condition
    let message

    switch (checkType) {
        case 'checkArgsTypesIsNumber':
            condition = "typeof el !== 'number'"
            message = "`Тип аргумента №${i + 1} вызываемой функции - '${typeof el}'. Тип аргумента должен быть 'number'.`"
            break
        case 'checkArgsValuesIsNumber':
            condition = "!el || isNaN(el) || typeof el == 'boolean'"
            message = "`Значение аргумента №${i + 1} вызываемой функции - '${el}'. Значение аргумента должно быть числом.`"
            break

    }

    args.forEach((el, i) => {
        if (eval(condition)) {
            throw new Error(eval(message))
        }
    })
}

const getAgeValues = () => {
    let values = []

    for (let i = 0; i < 3; i++) {
        values[i] = prompt(`Введите значение age_${i + 1}`)
    }

    return values
}


// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
const checkAge = (ageValues) => {
    const [age_1, age_2, age_3] = ageValues
    let message = ''

    if (age_1 < age_2) {
        message = `You don’t have access cause your age is ${age_1} It’s less then`
    } else if ((age_1 >= age_2) && (age_1 < age_3)) {
        message = `Welcome!`
    } else if (age_1 > age_3) {
        message = `Keep calm and look Culture channel`
    } else {
        message = `Technical work`
    }

    console.log(message)
}

console.log(`\nЗадание 1*:`)

let ageValues = [17, 18, 61]
checkAge(ageValues)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
const checkAgeImproved = (ageValues, checkType) => {
    checkArgs(ageValues, checkType)
    checkAge(ageValues)
}

console.log(`\nЗадание 2*:`)

ageValues = [17, 18, 61]
checkAgeImproved(ageValues, 'checkArgsTypesIsNumber')


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
console.log(`\nЗадание 3*:`)

ageValues = [17, `18`, 61]
checkAgeImproved(ageValues)


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
console.log(`\nЗадание 4*:`)

ageValues = getAgeValues()
checkAgeImproved(ageValues)