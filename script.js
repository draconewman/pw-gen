const char_amount_range = document.getElementById('char_amount_range')
const char_amount_number = document.getElementById('char_amount_number')
const include_uppercase_elements = document.getElementById('include_uppercase')
const include_numbers_elements = document.getElementById('include_numbers')
const include_symbols_elements = document.getElementById('include_symbols')
const form = document.getElementById('pw_generator')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR = array_from_low_to_high(65, 90)
const LOWERCASE_CHAR = array_from_low_to_high(97, 122)
const NUMBER_CODES = array_from_low_to_high(48, 57)
const SYMBOL_CODES = array_from_low_to_high(33, 47).concat(array_from_low_to_high(58, 64)).concat(array_from_low_to_high(91, 96)).concat(array_from_low_to_high(123, 126))

char_amount_range.addEventListener('input', sync_char_amount)
char_amount_number.addEventListener('input', sync_char_amount)

form.addEventListener('submit', e=> {
    e.preventDefault()
    const char_amount = char_amount_number.value
    const include_uppercase = include_uppercase_elements.checked
    const include_numbers = include_numbers_elements.checked
    const include_symbols = include_symbols_elements.checked
    const password = generate_password(char_amount, include_uppercase, include_numbers, include_symbols)
    passwordDisplay.innerText = password
})

function generate_password(char_amount, include_uppercase, include_numbers, include_symbols){
    let char_codes = LOWERCASE_CHAR
    if(include_uppercase) char_codes = char_codes.concat(UPPERCASE_CHAR)
    if(include_symbols) char_codes = char_codes.concat(SYMBOL_CODES)
    if(include_numbers) char_codes = char_codes.concat(NUMBER_CODES)
    

    const password_chars = []
    for (let i=0; i < char_amount; i++){
        const characterCode = char_codes[Math.floor(Math.random() * char_codes.length)]
        password_chars.push(String.fromCharCode(characterCode))
    }
    return password_chars.join('')
}

function array_from_low_to_high(low, high){
    const array = []
    for (let i=low; i <= high; i++){
        array.push(i)
    }
    return array
}

function sync_char_amount(e) {
    const value = e.target.value
    char_amount_number.value = value
    char_amount_range.value = value        
}

