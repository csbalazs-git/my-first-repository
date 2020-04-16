let data01 = {
    photo: './img/csirke.jpg',
    title: 'Csirkepaprikás',
    description: 'Ez egy nagyon finom csirkepaprikás kapros túrógombóccal',
};

let data02 = {
    photo: './img/sertes.jpg',
    title: 'Töltött sertéskaraj',
    description: 'Ez egy nagyon finom sertéskaraj sajttal, kolbásszal töltve',
}

let data03 = {
    photo: './img/szendvics.jpg',
    title: 'Rántotthúsos melegszendvics',
    description: 'Ez egy nagyon finom rántotthúsos melegszendvics sok sajttal, medvehagymával',
}

let currentPhoto = 0;

let imagesData = [data01, data02, data03];

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
// let counter = 0;
//  imagesData.forEach((data) => {
//      $('#thumbnail-container').append(
//         '<div class ="container" id="container-' + counter + '"><img src="' + data.photo + '"data-number="' + counter + '" id="containerPhoto"></div>'
//     );
//     $('.container').click((event) => {
//         let indexClicked = $(event.target).attr('data-number');
//         let numberIndex = parseInt(indexClicked);
//         $('.container').text(imagesData[indexClicked].title);
//    });
// });

imagesData.forEach((data, index) => {
  $('#thumbnail-container').append('<div class="container" data-index="${index}"><img src="' + data.photo + '" id="containerPhoto"></div>');
  $('.container').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    $('.container').text(imagesData[indexClicked].title);
  });
});
