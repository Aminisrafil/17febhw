var btn = document.getElementById('btn');
var total = document.getElementById('ttl')
var montlypayment = document.getElementById('mnt');
btn.onclick = function(){
    
    var kredit = document.getElementById('kredit');
    var faiz = document.getElementById('faiz');
    var ay = document.getElementById('ay');
    var finalkredit = (parseInt(kredit.value)*(parseInt(faiz.value)/100))+parseInt(kredit.value);
    total.value = finalkredit;
    montlypayment.value = finalkredit/ay.value;
}
var casma = document.getElementById('casma');
casma.onclick = function(){
    
    
    var video = 'https://www.youtube.com/watch?v=fEbqg3HjSzE';
    
    window.location = video;
}


    
