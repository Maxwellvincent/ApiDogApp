function getDogImage(userInput){
    
    // Use a fetch request to get access to URL of data wanted
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    // Then take the response of the data asked for, and return it as JSON
    .then(response => response.json())
    // Once data is returned as JSON, you can acees the response as JS object using . or [] notation.
    .then(responseJson => doSomethingWithResponse(responseJson))
    .catch(error => alert(error));
}

function getDogBreeds(userSelection){
    console.log(userSelection);
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => response.json())
    .then(responseJson => userPickBreed(responseJson))
    .catch(error => alert(error));
}

function getSpecificDog(breed,amount){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${amount}`)
    .then(response => response.json())
    .then(responseJson => doSomethingWithResponse(responseJson))
    .catch(error => alert(error));
}

function formAction(){
    console.log("Document is ready");
    getDogBreeds();
    $('form').on('submit',(e) => {
        $('.image-holder').empty();
        e.preventDefault();
        userWants = $('#num-pics').val();
        userBreed = $('#breeds').val();
        console.log(userBreed);
        console.log(userWants);
        // console.log("user wants this many pics: " + userWants);
        // getDogImage(userWants);
        // console.log(userBreed);
        // getDogBreeds(userBreed);
        getSpecificDog(userBreed,userWants)

    })
}

function doSomethingWithResponse(response){
    let dogImagesArray = response.message;
    console.log(dogImagesArray);
    $('.image-holder').removeClass("hidden");
    dogImagesArray.forEach((image) =>{
        $('.image-holder').append(`
            <img src="${image}" class="card-view">
        `)
    })

}

function userPickBreed(response){
    // Returns an object with an array of breeds
    let breedArray = response.message;
    
    let dogType;
    Object.keys(breedArray).forEach(function(key) {
        dogType += `<option value =${key}>${key}</option>`;
    })
    // breedArray.forEach((type) => console.log(type));
    $('#breeds').append(dogType);
}

formAction()