let sum = 0;
while(true) {

    let value = +prompt('Enter a number', '');

    /*if (!value) break;*/

    sum += value;
    console.log(sum)
    console.log(typeof(sum))
}
alert(sum);