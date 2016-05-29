//Extracting data from cookie
function getCookie(key){
  var data = document.cookie.split(";");

  for(var i = 0; i < data.length; i++){
    var keyvalue = data[i].split("=");
    if(trim(keyvalue[0]) == key){
      //decoding for non-alphanumeric charcters
      return decodeURIComponent(trim(keyvalue[1]));
    }
  }
  return null;
}

//Regular expression: trimming down empty char at the head and tail of string
function trim(value){
  return value.replace(/^\s* | \s*$/g , "");
}
