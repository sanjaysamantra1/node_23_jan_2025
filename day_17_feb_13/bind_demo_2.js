class Student {
    firstName = 'sachin';
    lastName = 'tendulkar';

    fullName() {   // this = from which context it is called
        console.log(this); // this = (dynamic) Student Object
        console.log(this.firstName, this.lastName);
    }
}
let std = new Student();
std.fullName(); // this = std

setTimeout(std.fullName.bind(std) , 2000); // this = gloabl