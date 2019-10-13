var x = document.getElementById("addSkill");
    if(x.style.display !== "none"){
        x.style.display = "none";
    }

    document.getElementById("plus_1").addEventListener("click" , function(){ 
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("p_addSkill").innerHTML = "<p>skill name <input type=\"textbox\" size=\"10\" class=\"w3-textbox-skill\" id=\"textbox_add_skill_name\">percent    <input type=\"number\" min=\"0\" max=\"100\"  size=\"4\" style =\"text-align:right\" id=\"textbox_add_percent\" class=\"w3-textbox-skill\"> <input type =\"submit\" id=\"submit_add_skill\" onclick=\"add_skill()\" value= \"Submit\"></p>";
          } else {
            x.style.display = "none";
          }
    });

    var y = document.getElementById("changeName");
    if(y.style.display !== "none"){
        y.style.display = "none";
    }
    
    function toggle_pencil(){
        if (y.style.display === "none") {
            y.style.display = "block";
            document.getElementById("p_changeName").innerHTML = "<p>New Name <input type=\"textbox\" size=\"15\" class=\"w3-textbox-skill\" id=\"new_name\">     <input type =\"submit\" id=\"submit_add_skill\" onclick=\"change_name()\" value= \"Submit\"></p><hr>";
          } else {
            y.style.display = "none";
          }
    }

    document.getElementById("desktop_icon").addEventListener("click", function(){ 

        if(document.getElementById("desktop_icon").className == ("fa fa-desktop desktop-lists-dark")){
            document.getElementById("desktop_icon").classList.remove("desktop-lists-dark");
            document.getElementById("desktop_icon").classList.add("desktop-lists-white");
    
            document.getElementById("setBackground_left").removeAttribute("class");
            document.getElementById("setBackground_left").setAttribute("class" , "w3-dark w3-text-grey w3-card-4");
    
            document.getElementById("setBackground_right1").removeAttribute("class");
            document.getElementById("setBackground_right1").setAttribute("class" , "w3-container w3-card w3-dark w3-margin-bottom");  
            
            document.getElementById("setBackground_right2").removeAttribute("class");
            document.getElementById("setBackground_right2").setAttribute("class" , "w3-container w3-card w3-dark w3-margin-bottom");  
        }
        else if(document.getElementById("desktop_icon").className == ("fa fa-desktop desktop-lists-white")){
            document.getElementById("desktop_icon").classList.remove("desktop-lists-white");
            document.getElementById("desktop_icon").classList.add("desktop-lists-dark");
    
            document.getElementById("setBackground_left").removeAttribute("class");
            document.getElementById("setBackground_left").setAttribute("class" , "w3-white w3-text-grey w3-card-4");
    
            document.getElementById("setBackground_right1").removeAttribute("class");
            document.getElementById("setBackground_right1").setAttribute("class" , "w3-container w3-card w3-white w3-margin-bottom");  
            
            document.getElementById("setBackground_right2").removeAttribute("class");
            document.getElementById("setBackground_right2").setAttribute("class" , "w3-container w3-card w3-white w3-margin-bottom");  
        }
    });



    function add_skill(){
        var val_name = document.getElementById("textbox_add_skill_name").value;
        var val_percent = document.getElementById("textbox_add_percent").value;
        document.getElementById("p_list_skill").innerHTML += "<div id =\"p_"+val_name +"\"><p>"+val_name+"<i class=\"fa fa-trash w3-float-right w3-trash\" id=\""+val_name+"\" onclick = \"delete_skill(\'"+val_name+"\')\"><\/i><\/p><div class=\"w3-light-dark w3-round-xlarge w3-small\"><div class=\"w3-container w3-center w3-round-xlarge w3-yellow\" style=\"width:"+val_percent+"%\">"+val_percent+"%</div></div></div>";
    }

    function set_skill(val_name , val_percent){
        document.getElementById("p_list_skill").innerHTML += "<div id =\"p_"+val_name +"\"><p>"+val_name+"<i class=\"fa fa-trash w3-float-right w3-trash\" id=\""+val_name+"\" onclick = \"delete_skill(\'"+val_name+"\')\"><\/i><\/p><div class=\"w3-light-dark w3-round-xlarge w3-small\"><div class=\"w3-container w3-center w3-round-xlarge w3-yellow\" style=\"width:"+val_percent+"%\">"+val_percent+"%</div></div></div>";
    }



    function delete_skill(val_skill_name){
        $("#p_"+val_skill_name).remove();
    }

    function change_name(){
        var val_name = document.getElementById("new_name").value;
        document.getElementById("fname").innerHTML = "<p id = \"fname\"><i class=\"fa fa-user fa-fw w3-margin-right w3-large w3-text-yellow\"><\/i>"+val_name+"<i class=\"fa fa-pencil fa-fw w3-float-right w3-large w3-pencil\" id=\"pencil_1\" onclick=\"toggle_pencil()\" ><\/i><\/p>"
    }



    $( document ).ready(function() {
        set_skill("Java" , "70");
        set_skill("Javascript" , "70");
        set_skill("photoshop" , "50");
        set_skill("Media" , "50");

    });