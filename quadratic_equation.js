const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));


function discriminant(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}


function calcX(a, b, c) {
    if (discriminant(a, b, c) < 0) {
        return 'Empty set';
    } else if (discriminant(a, b, c) === 0) {
        return 'x = ' + (-b) / (2 * a);
    } else {
        let x1 = (-b + Math.sqrt(discriminant(a, b, c))) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant(a, b ,c))) / (2 * a);
        return 'x1 = ' + x1 + ' and x2 = ' + x2;
    }
}

const result = calcX(a, b, c);
alert(result);