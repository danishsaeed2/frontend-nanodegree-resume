// $("#main").append("Danish Saeed");

var awesomeThoughts="I am Danish and I am AWESOME!";
// console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// $("#main").append(funThoughts);

var formattedName;
var formattedRole;

formattedName = HTMLheaderName.replace("%data%","Danish Saeed");
formattedRole = HTMLheaderRole.replace("%data%","Student");

$("#header").append(formattedName);
$("#header").append(formattedRole);
