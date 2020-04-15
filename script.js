let data01 = {
    photo: './img/csirke.jpg',
    title: 'Csirkepaprikás',
    description: 'Ez egy nagyon finom csirkepaprikás kapros túrógombóccal'
};

let data02 = {
    photo: './img/sertes.jpg',
    title: 'Töltött sertéskaraj',
    description: 'Ez egy nagyon finom sertéskaraj sajttal, kolbásszal töltve'  
}

let data03 = {
    photo: './img/szendvics.jpg',
    title: 'Rántotthúsos melegszendvics',
    description: 'Ez egy nagyon finom rántotthúsos melegszendvics sok sajttal, medvehagymával'  
}

let currentPhoto = 2;

let imagesData = [data01, data02, data03];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);
