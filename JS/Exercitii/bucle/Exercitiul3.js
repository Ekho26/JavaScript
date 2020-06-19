for(h = 1; h <= 20; h++) {   
    for(w = 1; w <= 10; w++){
        if(h == 1 || h == 20 || w == 1 || w == 10){
            document.write("#");
        } else if(h != 1 && h != 20 && w != 1 && w != 10){
            document.write("o");
        }
    } 
        document.write("<br/>");
}