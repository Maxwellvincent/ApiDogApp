function getDogImage(userInput){
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson => doSomethingWithResponse(responseJson));
}

function formAction(){
    console.log("Document is ready");
    $('form').on('submit',(e) => {
        e.preventDefault();
        userWants = $('#num-pics').val()
        console.log("user wants this many pics: "+ userWants +" ");
        getDogImage(userWants);
    })
}

function doSomethingWithResponse(response){
    let dogImagesArray = response.message;
    dogImagesArray.forEach((image) => console.log(image));

}

formAction()