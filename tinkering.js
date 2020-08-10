var education = "";
var salary =0;

switch (education){
  case "no high school diploma":
    salary += 25,636;
  case "a high school diploma":
    salary += 35,256;
  case "an Associate's degree":
    salary += 41,496;
  case "a Master's degree":
    salary += 59,124;
  case "a Professional degree":
    salary += 89,960;
  case "a Doctoral degree":
    salary += 84,396;
  default:
    console.log("In 2015, a person with " + education + " earned an average of $" + salary + "/year");
}



