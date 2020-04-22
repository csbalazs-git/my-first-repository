let photo01 = {
    photo: './img/csirke.jpg',
    title: 'Csirkepaprikás',
    description: 'Ez egy nagyon finom csirkepaprikás kapros túrógombóccal',
};

let photo02 = {
    photo: './img/sertes.jpg',
    title: 'Töltött sertéskaraj',
    description: 'Ez egy nagyon finom sertéskaraj sajttal, kolbásszal töltve',
}

let photo03 = {
    photo: './img/szendvics.jpg',
    title: 'Rántotthúsos melegszendvics',
    description: 'Ez egy nagyon finom rántotthúsos melegszendvics sok sajttal, medvehagymával',
}

let currentPhoto = 0;

let imagesData = [photo01, photo02, photo03];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
  }
  
loadPhoto(currentPhoto);
  
$('#jobbra-nyil').click(() => {
    currentPhoto++;
    if(currentPhoto < imagesData.length) {
        loadPhoto(currentPhoto);
      } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto)
      }
  })

$('#balra-nyil').click(() => {
    currentPhoto--;
    if(currentPhoto < 0) {
      currentPhoto = imagesData.length-1;
      loadPhoto(currentPhoto);
      } else 
      loadPhoto(currentPhoto)
})

let counter = 0;
imagesData.forEach(photo => {
    $("#thumbnails").append(
        '<div class="container" id="kontener-' + counter + '"><img src="' + photo.photo + '" data-number="' + counter +  '" id="containerPhoto"><blockquote class="speech-bubble">' + photo.title + '</blockquote></div>'
    );
    counter++;
});

$(".container").on( "click",function (event) {
  currentPhoto = $(event.target).attr("data-number");
  loadPhoto(currentPhoto);
  let id = "#kontener-" + currentPhoto;
  $(id).css("transform", "scale(1.1)");
  for(let counter2 = 0; counter2 < imagesData.length; counter2++){
    if(counter2 != currentPhoto){
        let id2 = "#kontener-" + counter2;
        $(id2).css("transform", "scale(1.0)");
    }
}
});