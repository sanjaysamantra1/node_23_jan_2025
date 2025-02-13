function fullName() {
    console.log(this.firstName, this.lastName);
}
fullName(); // this = global

let user1 = { firstName: 'sachin', lastName: 'tendulkar' };
fullName.call(user1);

let user2 = { firstName: 'virat', lastName: 'kohli' };
fullName.call(user2);