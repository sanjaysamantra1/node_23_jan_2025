function add(a, b, c = 0) { // default parameter value
    console.log(a + b + c);
}
add(2, 3, 4); // 9
add(2, 3);    // 5