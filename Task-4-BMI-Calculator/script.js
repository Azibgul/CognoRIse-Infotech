//clear function
function Clear() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("state").innerHTML = "";
}

document.querySelector(".calculate").addEventListener("click", function () {
  //hide output
  document.getElementById("output").style.display = "none";

  //show loader
  document.querySelector(".loader").style.display = "block";
  setTimeout(Bmi, 2000);
});

document.querySelector(".clear").addEventListener("click", Clear); // Moved up

//calculate function bmi
function Bmi() {
  //height and weight variables
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  //BMI formula
  let index = (weight / (((height / 100) * height) / 100)).toFixed(0);

  //condition to check if height and weight are not equal to zero
  if (height && weight != 0) {
    // console.log("Bmi function called"); // Check if the function is called
    const output = document.getElementById("output");
    const state = document.getElementById("state");
    output.innerHTML = "Your BMI is " + index; // Added a space after "is"
    if (index < 15) {
      state.innerHTML =
        "<span style='color:yellow';> Very Severely underweight!</span>"; // Fixed typo
    } else if (index < 16) {
      state.innerHTML =
        "<span style='color:yellow';> Severely underweight! </span>";
    } else if (index < 18.5) {
      state.innerHTML = "<span style='color:yellow';> underweight! </span>";
    } else if (index < 25) {
      state.innerHTML =
        "<span style='color:black';> Normal (Healthy weight)! </span>";
    } else if (index < 30) {
      state.innerHTML = "<span style='color:red';> Overweight! </span>";
    } else if (index < 35) {
      state.innerHTML = "<span style='color:#C0392B';> Obese Class I(Moderate obese)! </span>"; // Fixed typo
    } else if (index < 40) {
      state.innerHTML = "<span style='color:#C0392B';> Obese Class II(Severly obese)! </span>"; // Fixed typo
    } else if (index > 40) {
      state.innerHTML = "<span style='color:#C0392B';> Obese Class III(Very Severly obses)! </span>"; // Fixed typo
    }
    document.getElementById("output").style.display = "block";
    document.querySelector(".loader").style.display = "none";
    }
    else {
    // alert("Error!");
    error()
    function error(){
        document.getElementById("output").style.display = "block";
        document.querySelector(".loader").style.display = "none";
        document.getElementById("output").innerHTML = "<span style = 'color:#ac1c09';> Error: Enter height and weight first!";
        //settimeout method to hide the message after 5 second
        setTimeout(() => {
            document.getElementById("output").innerHTML = "";
            document.querySelector(".loader").innerHTML = "";
        }, 5000);
    }
  }
}
