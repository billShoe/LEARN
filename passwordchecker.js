function checkPassword() {
  var banned = ['!', '@' , '#' , '$' , '%' , '^', '&', '*'];
  var userName = prompt("Enter user name:");
  var password = prompt("Enter password");

  for (var i = 0 ; i < userName.length ; i++)
  {
    for (var k = 0 ; k < banned.length ; k++)
    {
      if(userName.charAt(i) == banned[k])
      {
        alert("Invalid username! You cant use " + banned[k]);
        return;
      }
    }
  }
  for (var i = 0 ; i < password.length ; i++)
  {
    for (var k = 0 ; k < banned.length ; k++)
    {
      if(password.charAt(i) == banned[k])
      {
        alert("Invalid password! You cant use " + banned[k]);
        return;
      }
    }
  }

}


username%sdff
