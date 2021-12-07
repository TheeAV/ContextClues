var friends = ["Alex", "Kody", "Tanner", "Laura", "Sphen"];
var locations = ["Bedroom", "Bathroom", "Office", "Closet", "Basement", "Kitchen", "Study", "Porch", "Dinningroom", "Hallway"];
var weapons = [
  "Moby Huge",
  "The penetrator",
  "Guitar",
  "Glizzy",
  "Memes",
  "Alex",
  "knife",
  "cat",
  "dog",
  "Golf Club",
  "M&M",
  "Knowledge",
  "axe",
  "sword",
  "blowtorch",
  "shoe",
  "car",
  "legos",
  "Milk Jug",
  "Baby",
];

for (var i = 1; i <= 100; i++) {
  var h3 = $("<h3>Accusation " + i + "</h3>");
  $(h3).appendTo("body");
  $(h3).click(murder(i));
}

function murder(i) {
  var friend = friends[i % 5];
  var location = locations[i % 10];
  var weapon = weapons[i % 20];
  function show() {
    alert("Accusation" + i + ": I accuse " + friend + " with the " + weapon + " in the " + location + "!");
  }
  return show;
}
