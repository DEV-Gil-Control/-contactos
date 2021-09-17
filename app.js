function getdata(){
  	var user=document.getElementById("user").value;
	firebase.database().ref(user).once('value').then(function (snapshot){
  		snapshot.forEach(function(childSnapshot)
  			{
  				//var childKey=user;
  				//var childData=childSnapshot.val();
  				document.getElementById("namemenor").innerHTML = snapshot.val().Child;


  		})
  			
  	})
  }
