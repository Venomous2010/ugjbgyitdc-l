function Recognize_Audio(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eAW0LO8UQ/model.json', modelready);
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound").innerHTML = 'I can hear ' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'accuracy: ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("sound").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img1 = document.getElementById("Alien_1");
        img2 = document.getElementById("Alien_2");
        img3 = document.getElementById("Alien_3");
        img4 = document.getElementById("Alien_4");

            if(results[0].label == "snap"){
                img2.src = "aliens-02.gif";
                img1.src = "aliens-01.png";
                img3.src = "aliens-03.png";
                img4.src = "aliens-04.png";
            }
            else if(results[0].label == "clap"){
                img3.src = "aliens-03.gif";
                img1.src = "aliens-01.png";
                img2.src = "aliens-02.png";
                img4.src = "aliens-04.png";
            }
            else if(results[0].label == "ringtone"){
                img4.src = "aliens-04.gif";
                img3.src = "aliens-03.png";
                img2.src = "aliens-02.png";
                img1.src = "aliens-01.png";
            }
            else{
                img1.src = "aliens-01.gif";
                img2.src = "aliens-02.png";
                img3.src = "aliens-03.png";
                img4.src = "aliens-04.png";
            }
        
    }
}