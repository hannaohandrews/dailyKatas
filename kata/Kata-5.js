const urlEncode = function(text) {
    let newText = ""
    
     for (let i = 0; i < text.length; i++){
       if(text[i] != " "){
         newText += text[i]
       } else {
         newText += "%20"
       }
       
     } 
     return newText
    };
    
    console.log(urlEncode("Lighthouse Labs"));
    console.log(urlEncode(" Lighthouse Labs "));
    console.log(urlEncode("blue is greener than purple for sure"));
    
    //Lighthouse%20Labs
    // Lighthouse%20Labs
    // blue%20is%20greener%20than%20purple%20for%20sure