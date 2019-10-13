

    function set_skill(val_name , val_percent){
        document.getElementById("p_list_skill").innerHTML += "<div id =\"p_"+val_name +"\"><p>"+val_name+"<i class=\"fa fa-trash w3-float-right w3-trash\" id=\""+val_name+"\" onclick = \"delete_skill(\'"+val_name+"\')\"><\/i><\/p><div class=\"w3-light-dark w3-round-xlarge w3-small\"><div class=\"w3-container w3-center w3-round-xlarge w3-yellow\" style=\"width:"+val_percent+"%\">"+val_percent+"%</div></div></div>";
    }




    $( document ).ready(function() {
        set_skill("Java" , "70");
        set_skill("Javascript" , "70");
        set_skill("photoshop" , "50");
        set_skill("Media" , "50");

    });