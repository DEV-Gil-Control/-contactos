function getdata(){
  	var user=document.getElementById("messages").value;
	firebase.database().ref(messages).once('value').then(function (snapshot){
  		snapshot.forEach(function(childSnapshot)
  			{
  				//var childKey=user;
  				//var childData=childSnapshot.val();
  				document.getElementById("namemenor").innerHTML = snapshot.val().namemenor;


  		})
  			
  	})
  }
