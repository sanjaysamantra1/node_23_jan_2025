let user = {
    fName: 'Sachin',
    lName: 'Tendulkar',
    fullName1: function () {
        console.log(this); // this = User
    },
    fullName2: () => {
        console.log(this); // this = module.exports
    }
}
user.fullName1()
user.fullName2()