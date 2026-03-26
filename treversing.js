let data = [9, 3, 70, 99, 0, 58];

function getElement() {
  //  for (i = 0; i < data.length; i++) {
  let ent = document.getElementById("element").value;
  ent = parseInt(ent)

  if (isNaN(ent)) {
    alert("value sai put kr ");
  } else if (ent < 0) {
    alert("value is less than zero please try again ");
  } else if (ent < data.length) {
    alert(data[ent]);
  } 
  else if (ent > data.length) {
    alert('less number use kro ');
  }else {
    alert("invaild input");
  }

  // };
}
