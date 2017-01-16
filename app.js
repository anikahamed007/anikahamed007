$(document).ready(function(){
	// alert("Please write something in comment.");
	$("#hmmm").click(function(){
		$(".para").addClass("scroll").css("color","green");
	});
	

	
$("#bmw").mouseenter(function(){
    var a = $("#pass").val();
    var y = a.length;
    

     if(y <= 6){
        $("#strength").text("Weak").css("color","red")
    } else if (y <= 8) {
        $("#strength").text("Normal").css("color","orange")
     } else if (y > 8) {
        $("#strength").text("Strong").css("color","green")
    }
    
   });

    

$("#bmw").click(function(){
    var email = $("#mail").val();
    var password = $("#pass").val();
    if( email =='' || password ==''){
        
        alert("Please fill all fields...!!!!!!");
    }else{
        if( email == mail && password == pass ){
            alert("Login Succesfully ........!!")
        }else{
            alert("Wrong Email or Password ........!!")
        }
    }
})


    $("input").click(function(){
        var a = $("textarea").val();
        $("#here").append("<p>  </p>" + a);
    });



$("#btn3").click(function(){
        $("img").filter("#web").show(2000,function(){
            $("#mobile").hide(2000);
        })
    
    })

    $("#btn2").click(function(){
        $("img").filter("#mobile").show(2000,function(){
            $("#web").hide(2000);
        })
    
    })


    $("#btn1").click(function(){
        $("img").filter("#mobile").show(2000,function(){
            $("#web").show(2000);
        })
    
});





});