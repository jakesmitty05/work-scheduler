// gets current time and hour, sets text to current time
var today = dayjs()
$('#time-stuff').text(today.format("dddd MMM D, YYYY"))
var hour = today.format("H")
console.log(hour)
// sets current hour to be green and rest to grey
for (var j = 9; j < 18; j++) {
    if (hour === document.getElementById(j).id) {
        document.getElementById(j).classList.add("present")
    } else {
        document.getElementById(j).classList.add("past")
    }
}
// pulls values from local storage
for (var i = 1; i < 10; i++) {
    document.getElementById("inp" + i).value = localStorage.getItem("work"+i)
}
// sets current input value to local storage, called on click
function getId(idOfBtn) {
    var idNum = idOfBtn.replace(/\D/g, '')
    var works = document.getElementById("inp" + idNum).value
    localStorage.setItem("work"+idNum, works);
}