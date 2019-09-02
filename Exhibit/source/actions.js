function disappear(object_1, object_2) {
    let element_1 = document.getElementById(object_1);
    element_1.classList.remove("read_more");
    element_1.classList.add("read_less");

    let element_2 = document.getElementById(object_2);
    element_2.classList.remove("read_less");
    element_2.classList.add("read_more");
}