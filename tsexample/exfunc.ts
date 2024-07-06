interface person {
    name: string;
    age: number;

}


//create array of person obj
const people: person[] = [
    { name: 'John', age: 30 },
    { name: 'Steve', age: 40 },
    { name: 'mamimi', age: 20 }
]

//function to filter who are at least 30 yo
function filteradults(persons: person[]): person[] {
    return persons.filter(persons=>persons.age>=30);
}

//show
const adults = filteradults(people); //filter adult
console.log(adults) //show msg


