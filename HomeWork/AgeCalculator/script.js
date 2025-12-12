let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("calculateBtn").addEventListener("click", () => {
  if (dob.value == "" || currentDate.value == "") {
    output.innerHTML = "Please selecte Date";
  } else {
    calculateAgeDifference(dob.value, currentDate.value);
  }
});
function calculateAgeDifference(start,end){
    console.log(start);
    let dobYear = parseInt(start.substring(0,4),10);
    let dobMonth = parseInt(start.substring(5,7),10);
    let dobDate = parseInt(start.substring(8,10),10);
    let currYear = parseInt(end.substring(0,4),10);
    let currMonth = parseInt(end.substring(5,7),10);
    let currDate = parseInt(end.substring(8,10),10);

    // year difference

    let yearAgeDifference = currYear - dobYear;

    let monthAgeDifference;
    if(currMonth >= dobMonth)
    {
        monthAgeDifference = currMonth - dobMonth;
    }else{
        yearAgeDifference--;
        monthAgeDifference = 12 + currMonth - dobMonth;
    }

    let dateAgeDiffernce;
    if(currDate >= dobDate)
    {
        dateAgeDiffernce = currDate - dobDate;
    }else{
        monthAgeDifference--;
        noOfDateInDOB = daysInMonth(dobMonth,dobYear);
        dateAgeDiffernce = noOfDateInDOB + currDate - dobDate;

        if(monthAgeDifference<0)
        {
            monthAgeDifference = 11;
            yearAgeDifference--;
        }
    }

    output.innerHTML = yearAgeDifference + " Years, " + monthAgeDifference + " Months, " + dateAgeDiffernce + "days.";

    function daysInMonth(Month,year){
        
        return new Date(year,Month,0).getDate();
    }

}
