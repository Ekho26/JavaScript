
var app = new Vue ({
    el:'#app',
    data: {
        lyrics: "Loading..."
    },
    // metoda ce se apeleaza cand porneste aplicatia:
    mounted(){
        axios
            .get('https://api.lyrics.ovh/v1/artist/title')
            .then(response => this.fact = response.data.value.joke)
            .catch(error => console.log("No lyrics found"));
    }
})