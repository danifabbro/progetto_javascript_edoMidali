let btn = document.querySelector('button');

function loadImage(url,type,callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.responseType = type;

    xhr.onload = function(){
        callback(xhr.response);
    };
    xhr.send();
}
function displayImage(blob){
    let objectURL = URL.createObjectURL(blob);

    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);

    image.setAttribute('class','stileimg');
}






btn.addEventListener('click',()=>{
    loadImage('ananas.jpg','blob',displayImage);
});
