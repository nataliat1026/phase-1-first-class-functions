function receivesAFunction(cb) {
    const something = 'something';
    cb(something);
}

function returnsANamedFunction() {
    return function named() {
        console.log('something');
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('something');
    }
}