function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4a96gTeq4/model.json', modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}