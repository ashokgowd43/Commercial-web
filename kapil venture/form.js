
function contacts()
{
    var name =  document.form2.name.value;
    var email= document.form2.email.value;
    var massage= document.form2.massage.value

    if(name=="")
    {
     alert("please Enter the name");
     return false;
    }
    if(email=="")
    {
     alert("please enter the Email");
     return false
    }
    if(massage=="")
    {
      alert("Please Enter the your massage");
      return false
    }


    alert("submited successfully");
    return true;
}
 


// function validate()
// {
//    //  var name = document.forms["form1"]["name"].value;
//    //  var email = document.forms["form1"]["email"].value;
//    //  var message = document.forms["form1"]["message"].value;

//    var name =  document.form1.name.value;
//    var email= document.form1.email.value;

//  if(name=="")
//  {
//     alert("please enter name");
//     return false;
//  }
//  if(email=="")
//  {
//     alert("enter email");
//     return false;
//  }
//  if(message=="")
//  {
//     alert("Enter text here");
//     return false;
//  }
//  alert("Form Submitted Successfully");
//  return true;
// }
