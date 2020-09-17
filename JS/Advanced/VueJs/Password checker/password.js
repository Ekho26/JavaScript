// Construim o noua aplicatie Vue
var app = new Vue({
    el: "#app",
    data: {
        password: '',
    },
    computed: {
        score(){
            score = [
                this.hasSmallLetter,
                this.hasUpperLetter,
                this.hasDigit,
                this.hasSpecialChar,
                this.isLongEnough,
            ]
            .reduce((score, func) => score + func(), 0);
            return this.score;
        },
        message(){
            let message = [
                'Very Weak', 
                'Very Weak',
                'Weak',
                'Medium',
                'Strong',
                'Very Strong'
            ];
            return message[this.score()];
        }
    },
    methods: {
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
    },
});