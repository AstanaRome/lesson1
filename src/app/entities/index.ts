




export class User {
    private id: number;
    
    
    public constructor(public name: string, public age: number) {

    }




    public print() {
        console.log(`User ${this.id}`);
    }
}


export class Student extends User {
    public grades: number[] = [];
   
}

export class Group {
    public name: string;
    public students: Student[] = [];
    public teacher: Teacher;
}



export class Teacher extends User {
    public groups: Group[] = [];
}


