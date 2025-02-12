let user = {
    fName: 'sachin',
    lName: 'tendulkar',
    fullName1: function () { // ES-5
        console.log(this.fName, this.lName);
    },
    fullName2() { // ES-6
        console.log(this.fName, this.lName);
    }
}
user.fullName1();
user.fullName2();