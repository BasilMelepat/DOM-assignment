// 1. Write a JavaScript program to remove items from a drop-down list.
function removeColor(){
    const select = document.getElementById('colorSelect');
    select.remove(select.selectedIndex);
}

// 2. Write a JavaScript program to change the  color given text in p tag.
function changeColor() {
    let colorSelect = document.getElementById("colorSelect");
    let sampleText = document.getElementById("sampleText");
    let selectedColor = colorSelect.value;
    sampleText.style.color = selectedColor;
}

// 3. Write a JavaScript function to get the values of First and Last names of the following form.
function getFormValues() {
    let form = document.getElementById("form1");
    let firstName = form.elements["fname"].value;
    let lastName = form.elements["lname"].value;
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
}

// 4. Write a JavaScript program to display a random image (clicking on a button) from the following list.
function displayImage() {
    const images = [
        {
            url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
        },
        {
            url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
        },
        {
            url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"
        }
    ];
    const randomImage = Math.floor(Math.random() * images.length);
    const imgElement = document.getElementById("newImage");
    for (let i = 0; i < images.length; i++) {
        if (i === randomImage) {
            imgElement.src = images[i].url;
            imgElement.width = images[i].width;
            imgElement.height = images[i].height;
            break;
        }
    }
}