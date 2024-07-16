const uppercaseMessage = (message) => {
    return message.toUpperCase();
}
    
const transform = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform("Hi Karina", uppercaseMessage));


const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform2 = (message, transformFunction2) => {
    return transformFunction2(message);
}

console.log(transform2("HELLO EVERYBODY", lowercaseMessage))


const notifyByEmail = (emailAddress) => {
    return `Email sent to: ${emailAddress}`;
}

const notifyByText = (phoneNumber) => {
    return `Text sent to ${phoneNumber}`;
}

const notify = (emailOrPhone, notifyFunction) => {
    return notifyFunction(emailOrPhone);
}

console.log(notify('hello@maker.tech.test', notifyByEmail))
console.log(notify('+10000000000', notifyByText))