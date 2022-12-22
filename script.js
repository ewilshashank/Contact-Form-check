const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) =>{
    e.preventDefault(); //preventng form from submiting
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creaing new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = ()=>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response status is 200 & ready status is 4 means there is no any error
            let response = xhr.response;//storing ajax response in a response variable
            //if response is an error like enter valid email address then we'll change status color to red else reset the form
            if(response.indexOf("Email and password field required") != 1 || response.indexOf("Enter a Valid email address!") || response.indexOf("Sorry, failed to send your message")){
                statusTxt.style.color = "red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000); //hide the statusTxt after 3 seconds if msg is sent
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); //creating new FormData obj. this obj is used to send form data
    xhr.send(formData); //sending form data
}