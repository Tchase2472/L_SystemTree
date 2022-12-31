//variables: A B
//axiom: A
// rules: (A -> AB), (B => A)



let angle;
let axiom = "F";
let sentence = axiom;
let len = 100;
let rules = [];
let thinner = 8;

rules[0] = {

        a: "F",
        b: "FF+[+F-F-F]-[-F+F+F]"
}



function generate(){
    
    len *= 0.6;
    strokeWeight(8);
    
    var nextSentence = "";
  
    for(let i = 0; i < sentence.length; i++){
     
    let current = sentence.charAt(i);
    let found = false;

    for(let j = 0; j < rules.length; j++){
        if(current == rules[j].a){
            found = true;
            nextSentence += rules[j].b;
            break;
        }
    }

    if(!found){
        nextSentence += current;
    }
    
  }
   sentence = nextSentence;
   createP(sentence);
   strokeWeight(thinner *= 0.5);
   turtle();
}

function turtle(){
    background(51);
    resetMatrix();
    translate(width/2, height);
    
    stroke(255);
    for(let i = 0; i < sentence.length; i++){
        var current = sentence.charAt(i);

        switch(current){
            case "F" : line(0,0,0,-len);
                        translate(0, -len);
            break;
            case "+" : rotate(PI/6);
            break;
            case "-" : rotate(-PI/6);
            break;
            case "[" : push();
            break;
            case "]" : pop();
            break;
            default: console.log("Hey, that's not a rule!!");
        }
    }
}




function setup(){
    createCanvas(800,800);
    angle = radians(100);
    background(51);
    turtle();
    createP(sentence);
    let button = createButton("Generate");
    button.mousePressed(generate);

}