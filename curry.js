var R = require('ramda');
// curried version
var formatNames2 = R.curry(function(first, middle, last) {
    return first + ' ' + middle + ' ' + last;
});
formatNames2('John', 'Paul', 'Jones');

//=> 'John Paul Jones' // (definitely the musician!)
var jp = formatNames2('John', 'Paul'); //=> returns a function

jp('Jones'); //=> 'John Paul Jones' (maybe this one's the admiral)
jp('Stevens'); //=> 'John Paul Stevens' (the Supreme Court Justice)
jp('Pontiff'); //=> 'John Paul Pontiff' (ok, so I cheated.)
jp('Ziller'); //=> 'John Paul Ziller' (magician, a wee bit fictional)
jp('Georgeandringo'); //=> 'John Paul Georgeandringo' (rockers)


var namePrint = R.pipe(jp, console.log);
var names = R.forEach(namePrint, ['Jones', 'Stevens', 'Pointiff', 'Ziller', 'Gregory']);

