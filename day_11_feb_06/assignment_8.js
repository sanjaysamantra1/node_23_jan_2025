let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 5000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
// group by employee 'sal' , output: { 5000:[] , 7000:[] , 8000:[] }
let result = {};
for (emp of employees) {
    const emp_sal = emp.sal; // 5000
    if (!result[emp_sal]) {
        result[emp_sal] = [];
    }
    result[emp_sal].push(emp)
}
console.log(result)

