var master = {
    count: 1,
    count2: 9,
    count3: 12
}

function add1(element) {
    master[element]++;
    document.querySelector("." + element).innerText = master[element] + " like(s)";
}
