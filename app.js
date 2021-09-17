function getdata(){
  	var user=document.getElementById("user").value;
	firebase.database().ref(user).once('value').then(function (snapshot){
  		snapshot.forEach(function(childSnapshot)
  			{
  				//var childKey=user;
  				//var childData=childSnapshot.val();
  				document.getElementById("name").innerHTML = snapshot.val().Child;
  				document.getElementById("age").innerHTML = snapshot.val().age;
  				document.getElementById("Phno1").innerHTML = snapshot.val().Phno1;
  				document.getElementById("Phno2").innerHTML = snapshot.val().Phno2;
  				document.getElementById("blood").innerHTML = snapshot.val().Bloodgroup;
  				document.getElementById("address").innerHTML = snapshot.val().Address;
  				document.getElementById("allergy").innerHTML = snapshot.val().allergy;

  		})
  			
  	})
  }
