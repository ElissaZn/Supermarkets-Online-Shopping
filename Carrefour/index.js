
// document.querySelector("#username").innerText = userName.name;
let cartData=JSON.parse(localStorage.getItem("cartData")) || [];

document.querySelector("#total_item").innerHTML = cartData.length + " " ;


display(userName)
function display(userName){
    userName.forEach(function(ele) {
    document.querySelector("#username").innerText = ele.name;

});
}
document.querySelector("#username").addEventListener("click", function(ele,index) {
    userName.splice(index, 1);
    window.location.href = "index.html";
});


// <!-- ----------------------Append div here--------------------- -->
