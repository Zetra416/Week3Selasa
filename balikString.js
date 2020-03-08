var string = "hello world!";
var char="";

function balikString(string) {
  for (var i = string.length -1; i >= 0; i--) {
    char += string[i];
  }
  return console.log(char);
}

balikString(string);
