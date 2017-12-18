function checkVowel(string, position) {
    switch(string[position]){
    case "a"||"A":return true; 
    case "e"||"E":return true; 
    case "i"||"I":return true;
    case "o"||"O":return true; 
    case "u"||"U":return true;
    default: return false;
    }
};