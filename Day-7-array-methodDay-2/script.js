// Array cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }

];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older? 
// Array.prototype.every() // is everyone 19 or older?
const isAdult = people.some(function(person) {
    const currentYear  = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
})


// using erow function 
const isAdult2 = people.some(person => {
    const currentYear  = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
}); 

// other way to write
const isAdult3 = people.some(person => ((new Date()).
    getFullYear()) - person.year >= 19);
console.log(isAdult3);

const isAdults = people.every(person => ((new Date()).
    getFullYear()) - person.year >= 19);
console.log(isAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(function(comment) {
    if (comment.id === 823423) {
        return true;
    }
})
console.log(comment)

// With an erraw function 
const comment1 = comments.find(comment => {
    return comment.id === 823423;
})
const comment2 = comments.find(comment => comment.id === 823423);
console.log(comment2)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1)

// More used in the redux world it's going to build a new array
const newCommets = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

