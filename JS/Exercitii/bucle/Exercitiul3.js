for(h = 1; h <= 20; h++) {   
    for(w = 1; w <= 10; w++){
        if(h == 1){
            document.write("#");
        } else if(w == 1){
            document.write("#");
        } else if(w == 10){
            document.write("#");
        } else if(h == 20){
            document.write("#");
        } else if(h != 1){
            document.write("o");
        } else if(h != 20){
            document.write("o");
        } else if(w != 1){
            document.write("o");
        } else if(w != 10){
            document.write("o");
        }
    } 
        document.write("<br/>");
}