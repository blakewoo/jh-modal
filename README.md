# jh-modal

## What is this?
This project is an open-source modal. It aims to provide a modal that anyone can easily use by simply importing it from the source code.

## How to use

Import modal.css and modal.js from the src/codebase folder for usage.
```html
    <link rel='stylesheet' href='../src/codebase/modal.css' />
    <script src="../src/codebase/modal.js"></script>
```

If you want to use the compressed version, please use the code inside the "minimum" folder.
```html
    <link rel='stylesheet' href='../src/minimum/modal.min.css' />
    <script src="../src/minimum/modal.min.js"></script>
```


If you plan to bundle your project using a bundling package like webpack and need to use this project in CommonJS format, you can copy the code from the modal.js file in the codebase folder and paste it into your project. Afterward, insert the following code at the very bottom:
```javascript
exports.JH_oneChoiceModal = JH_oneChoiceModal
exports.JH_twoChoiceModal = JH_twoChoiceModal
```

##Quick start
To create the object for the event where you want the modal to appear, import the following properties:
### One choice modal
```javascript
document.getElementById("exampleId").addEventListener("click",function(event){
	let example = new JH_oneChoiceModal(TITLE,EXPLAIN,FIRST_BUTTON,WIDTH,HEIGHT)
    example.firstEvent = function (event) {
	    alert("first button!")
    }
})
```

#### TITLE
The TITLE value is an argument for the title of the modal that will be created, and if it is NULL, the title is omitted.

#### EXPLAIN
The EXPLAIN value is an argument for the description to be attached to the modal that will be created.

#### FIRST_BUTTON
The FIRST_BUTTON value is an argument for the content to be displayed on the first button.

#### WIDTH
The WIDTH value represents the width of the modal to be created, and if omitted, it will be set to 300px.

#### HEIGHT
The HEIGHT value represents the height of the modal to be created, and if omitted, it will be set to 200px.

#### firstEvent function
The firstEvent function is the function triggered when the first button is clicked.


### Two choice modal
```javascript
document.getElementById("exampleId").addEventListener("click",function(event){
	let example = new JH_twoChoiceModal(TITLE,EXPLAIN,FIRST_BUTTON,SECOND_BUTTON,WIDTH,HEIGHT)

    example.firstEvent = function (event) {
        alert("first button!")
    }

    example.secondEvent = function (event) {
        alert("second button!")
    }
})
```
#### TITLE
The TITLE value is an argument for the title of the modal that will be created, and if it is NULL, the title is omitted.

#### EXPLAIN
The EXPLAIN value is an argument for the description to be attached to the modal that will be created.

#### FIRST_BUTTON
The FIRST_BUTTON value is an argument for the content to be displayed on the first button.

#### WIDTH
The WIDTH value represents the width of the modal to be created, and if omitted, it will be set to 300px.

#### HEIGHT
The HEIGHT value represents the height of the modal to be created, and if omitted, it will be set to 200px.

#### firstEvent function
The firstEvent function is the function triggered when the first button is clicked.

#### secondEvent function
The secondEvent function is the function triggered when the second button is clicked.

## License

MIT