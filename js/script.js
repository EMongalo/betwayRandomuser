$(document).ready(function(){
    var url = "https://randomuser.me/api/";
    var personImg;
    var personName;
    var personEmail;
    var personBirthday;
    var personAddress;
    var personPhone;
    var personPassword;

    fetch(url)
        .then((response) => response.json())
        .then(function(data){
           url = "https://randomuser.me/api/";
           fetchInformation(url);
        });

    function fetchInformation(url){
        fetch(url)
        .then((response) => response.json())
        .then(function(data){
           data.results.forEach(person => {
               personImg = person.picture.large;
               personName = person.name.first + " " + person.name.last;
               personEmail = person.email;
               personBirthday = person.dob.date;
               personAddress = person.location.street.number + " " + person.location.street.name;
               personPhone = person.phone;
               personPassword = person.login.password;
               //console.log(person);
           });   
           $("#userImage").attr("src", personImg);
           $("#userSubtitle").html(personName);    
        })
    }

    var menuList = document.getElementsByClassName("c-tabs__list");
    for (var i = 0; i < menuList.length; i++) {
      menuList[i].addEventListener("mouseover", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    
    $("button").click(function(){
    	fetchInformation(url);
    });
    
    $("li").eq(0).mouseover(function(){
    	$("#userTitle").html("Hi, My name is");
    	$("#userSubtitle").html(personName);
    });
    $("li").eq(1).mouseover(function(){
    	$("#userTitle").html("My email address is");
    	$("#userSubtitle").html(personEmail);
    });
    $("li").eq(2).mouseover(function(){
    	$("#userTitle").html("My birthday is");
    	$("#userSubtitle").html(personBirthday.substring(0, 10));
    });
    $("li").eq(3).mouseover(function(){
    	$("#userTitle").html("My address is");
    	$("#userSubtitle").html(personAddress);
    });
    $("li").eq(4).mouseover(function(){
    	$("#userTitle").html("My phone number is");
    	$("#userSubtitle").html(personPhone);
    });
    $("li").eq(5).mouseover(function(){
    	$("#userTitle").html("My password is");
    	$("#userSubtitle").html(personPassword);
    });
});