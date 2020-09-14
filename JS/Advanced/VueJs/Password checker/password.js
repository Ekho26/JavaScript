// Construim o noua aplicatie Vue
var app = new Vue({
    el: "#app",
    data: {
        password: '',
        score: 0,
        message: 'Very Weak',
        messages: [
            'Very Weak', 
            'Very Weak',
            'Weak',
            'Medium',
            'Strong',
            'Very Strong'
        ]
    },
    methods: {
        evaluateScore: function(){
            // definim noul scor initial ca fiind egal cu 0
            let newScore = 0;
            // Evaluam fiecare conditie dintre cele 5
            // Adaugam 1 la scor pentru fiecare conditie indemplinita
            newScore += hasSmallLetter();
            // if(this.hasSmallLetter()){
            //     newScore +=1;
            // }
            newScore +=hasUpperLetter();
            // if(this.hasUpperLetter()){
            //     newScore +=1;
            // } 
            newScore += hasDigit();
            // if(this.hasDigit()){
            //     newScore +=1;
            // } 
            newScore += hasSpecialChar();
            // if(this.hasSpecialChar()){
            //     newScore +=1;
            // } 
            newScore += isLongEnough();
            // if(this.isLongEnough()){
            //     newScore +=1;
            // }
            // inlocuim vechiul scor cu noul scor
            this.score = newScore;
            // inlocuim mesajul cu noul mesaj
            this.message = this.messages[newScore];

            // Sau:
            // newScore = [
            //     this.hasSmallLetter,
            //     this.hasUpperLetter,
            //     this.hasDigit,
            //     this.hasSpecialChar,
            //     this.isLongEnough
            // ].reduce((score, func) => score + func(), 0);
            // In loc de codul de mai sus
        },
        hasSmallLetter: function(){
            return /[a-z]/.test(this.password);
        },
        hasUpperLetter: function(){
            return /[A-Z]/.test(this.password);
        },
        hasDigit: function(){
            return /[0-9]/.test(this.password);
        },
        hasSpecialChar: function(){
            return /[^a-zA-Z0-9]/.test(this.password);
        },
        isLongEnough: function(){
            return this.password.length >= 8;
        }
    }
});