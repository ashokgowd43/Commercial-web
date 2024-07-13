// function showDownloadButton() {
//     var downloadBtn = document.getElementById("download-btn");
//     downloadBtn.style.display = "inline-block";
//   }

 function contact()
 {
     var name =  document.form1.name.value;
     var email= document.form1.email.value;
	 

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
     


     alert("submited successfully");
     return true;
 }
  
 function feedback()
 {

    var massage= document.feed1.massage.value;

    if(massage=="")
     {
      alert("please enter  your massage");
      return false
      
     }
     alert("your Feedback  Resived successfully");
     return true;

 }