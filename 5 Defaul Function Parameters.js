function countTo5(count = false) {
    if (count === true) {
        for (let i = 1; i <= 5; i++) {
            console.log(`Count: ${i}`);
        }
    }
}

countTo5(true)

function rating(rate = 0) {
    if (rate === 5) {
        console.log('High Rating :)');
    } else if (rate === 0) {
        console.log('Low Rating :(');
    }
}

rating()