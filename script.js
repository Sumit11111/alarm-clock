//array to store alarms time
var arr = [];

//handles set alarm button which will add form data to list and array
const setAlarmHandler = () => {
  let time = document.getElementById("time").value;
  //console.log(time);
  let hh = time.substring(0, 2);
  let mm = time.substring(3, 5);
  let ss = time.substring(6, 8);
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }
  //adding extra when hh/mm/ss is less than 10
  hh = hh < 10 && hh > 0 ? "0" + hh : hh;
  mm = mm < 10 && mm > 0 ? "0" + mm : mm;
  ss = ss < 10 && ss > 0 ? "0" + ss : ss;

  let updatedTime = hh + ":" + mm + ":" + ss + " " + session;
  console.log(updatedTime);
  arr.push(updatedTime);

  //creatig different nodes and appending each other with properties
  const liNode = document.createElement("li");
  const divNode = document.createElement("div");
  divNode.classList.add("alarm-list-item");
  const iconNode = document.createElement("img");
  iconNode.src = "https://cdn-icons-png.flaticon.com/128/860/860735.png";
  const textNode = document.createElement("p");
  textNode.innerText = updatedTime;
  const btnNode = document.createElement("input");
  btnNode.value = "Delete";
  btnNode.type = "button";
  //adding event listner on delete button inside list items
  btnNode.addEventListener(
    "click",
    (e) => {
      //console.log("eventlistner");
      const index = arr.indexOf(updatedTime);
      arr.splice(index, 1);
      console.log(arr);
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    },
    false
  );
  //appending different nodes with right manner
  liNode.appendChild(divNode);
  divNode.appendChild(iconNode);
  divNode.appendChild(textNode);
  divNode.appendChild(btnNode);
  document.getElementById("alarm-list").appendChild(liNode);
};

//handles the alert by going through array elements and current time
const alertHandler = (t) => {
  const index = arr.indexOf(t);
  for (let time of arr) {
    if (t == time) {
      window.alert("Wake up!!");
      arr.splice(index, 1);
    }
  }
};

//create current time clock
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 && hh > 0 ? "0" + hh : hh;
  mm = mm < 10 && mm > 0 ? "0" + mm : mm;
  ss = ss < 10 && ss > 0 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;
  //console.log(time1);
  document.getElementById("current-time").innerHTML = `<h1>${time}</h1>`;
  //in everyone sec it will call itself and alert handler
  setTimeout(function () {
    alertHandler(time);
    currentTime();
  }, 1000);
}
currentTime();
