var countDownDatum = new Date("September 22, 2023 07:00:00").getTime();

var interval = setInterval(function(){
    var most = new Date().getTime();
    var akkor = countDownDatum - most;

    var nap = Math.floor(akkor / (1000 * 60 * 60 * 24));
    var ora = Math.floor((akkor % (100 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var perc = Math.floor((akkor % (1000 * 60 * 60)) / (1000 * 60));
    var masodperc = Math.floor((akkor % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = nap + " nap " + ora + " óra " + perc + " perc " + masodperc + " másodperc a következő futamig.";
}, 1000)