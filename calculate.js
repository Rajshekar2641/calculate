function Number(){
    let student = parseFloat(document.getElementById("student").value);
    console.log(typeof student);
    let staff = parseFloat(document.getElementById("staff").value);
    document.getElementById("total").innerHTML = student + 2;
}