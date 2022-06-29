// &  AND
type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge; //        Intersection type        // Type Person must have Name AND LasteName AND Age
// type Person = HasName | HasLastName | HasAge;//      Union type              // Type Person can have Name OR LasteName OR Age

type AB = 'A' | 'B'; // Union type
type AC = 'A' | 'C'; // Union type
type AD = 'A' | 'D'; // Union type
type Intersection = AB & AC & AD; // Intersection of A

const person: Person = {
  name: 'Samuel',
  lastName: 'Monteiro',
  age: 18,
};

console.log(person);

export { person };
