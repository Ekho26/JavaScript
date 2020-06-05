var code = 0;

// while(code < 1024) {
//     document.write(code + " " + String.fromCharCode(code));
//     document.write("<br/>"); 
//     code++;   
// }\
for(var code = 0; code < 128; code++) {
    document.write(code +" "+ String.fromCharCode(code));
    document.write("<br/>");
}