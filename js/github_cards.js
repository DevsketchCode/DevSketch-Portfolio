$.ajax({
  url: "https://api.github.com/users/DevsketchCode/repos",
  jsonp: true, 
  method: "GET", 
  dataType: "json", 
  success: function(res) {
    console.log(res)
  }
})