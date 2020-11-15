'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());

}

// Q2. make an array out of a string
{
const fruits = '🍎, 🥝, 🍌, 🍒';
const result = fruits.split(', ');
console.log(result);
// function push() {
//     for (let i=0; i<fruits.length; i++) {
//     fruitsArray.push(fruits[i]);
// };
// }
// push();
// console.log(fruitsArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
const array2 = array.splice(0,2);
console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((element) => element.score===90);
    console.log(result);

}

// Q6. make an array of enrolled students
{const result = students.filter((x) => x.enrolled);
console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((students) => students.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
}

// Q9. compute students' average score
{
    const result = students.map((student)=> student.score/students.length)
    const result2 = result.reduce((a,b) => a+b);
    console.log(result2);
}
{
    const result = students.reduce((prev, curr)=> prev + curr.score, 0)/ students.length;
    console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student)=>student.score)
    .filter((score)=> score >=50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student)=> student.score)
    .sort((a,b) => b-a)
    .join();
    console.log(result);
}

let participant = ['sendo','eden', 'kiki', 'eden'];
let completion = ['kiki','eden','eden'];

let answer= '';

// for (let i=0; i<participant.length; i++){
//     if (completion.indexOf(participant[i])===-1) {
//         answer = participant[i];
//     }
// }

for (let i=0; i<participant.length; i++){
    // if (completion.indexOf(firstname)!== -1) {
    //     participant.splice(participant.indexOf(participant[0]),1);
    //     completion.splice(completion.indexOf(participant[0]),1);
    // } else 
    if (completion.indexOf(participant[0])=== -1) {
        answer = participant[0].toString();
        break;
        // participant.splice(participant.indexOf(participant[1]),1);
        // completion.splice(completion.indexOf(participant[1]),1);
    }
    participant.splice(participant.indexOf(participant[0]),1);
    completion.splice(completion.indexOf(participant[0]),1);
}

// while (completion.indexOf(firstname)=== -1) {
//     participant.splice(participant.indexOf(participant[0]),1);
//     completion.splice(completion.indexOf(participant[0]),1);
// }

console.log(answer);
participant.toString;
console.log(participant.toString());
console.log(completion.indexOf(participant[0]));
