var elForm = document.querySelector(".form");

var elInput = document.querySelector(".form__input");

var elList = document.querySelector(".form__list");

var elSpan= document.querySelector(".form__span");


var add = [];

elForm.addEventListener ("submit" , function (evt) {

    evt.preventDefault();


    var inputVal = elInput.value;

    elInput.value = null;

    var adds= {

        id: add.length + 1,

        title: inputVal

    }

    add.push(adds);

            
    elList.innerHTML = null;

    for (var item of add ) {

        var newText = document.createElement("li");

        newText.textContent = `${item.id} ${item.title}`;

        elList.appendChild(newText);
    }

});

