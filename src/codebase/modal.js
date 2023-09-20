const JH_twoChoiceModal = (function () {

    /**
     * @param TITLE:제목
     * @param EXPLAIN:문구
     * @param FIRST_BUTTON:첫버튼문구
     * @param SECOND_BUTTON:두번째버튼문구
     * @constructor
     */
    function JH_twoChoiceModal (TITLE,EXPLAIN,FIRST_BUTTON,SECOND_BUTTON,WIDTH=300,HEIGHT=200) {
        this.TITLE = TITLE
        this.EXPLAIN = EXPLAIN
        this.FIRST_VALUE = FIRST_BUTTON
        this.SECOND_VALUE = SECOND_BUTTON
        this.WIDTH = WIDTH
        this.HEIGHT = HEIGHT

        this.paint()
    }

    JH_twoChoiceModal.prototype.paint = function () {
        let bodyContainer = document.getElementsByTagName("body")[0]

        let containerDiv = document.createElement("div")
        containerDiv.style.border="1px solid black"
        containerDiv.style.borderRadius = "5px"

        if(this.WIDTH) {
            containerDiv.style.width = this.WIDTH+"px"
        }
        else {
            containerDiv.style.width = "300px"
        }

        if(this.HEIGHT) {
            containerDiv.style.height = this.HEIGHT+"px"
        }
        else {
            containerDiv.style.height = "200px"
        }

        containerDiv.style.position = "absolute"
        containerDiv.style.left = "calc(50% - "+Number(containerDiv.style.width.split("px")[0])/2+"px)"
        containerDiv.style.top = "calc(50% - "+Number(containerDiv.style.height.split("px")[0])/2+"px)"

        let explainDiv = document.createElement("div")
        explainDiv.style.width = "100%"
        explainDiv.style.height = "85%"
        explainDiv.style.textAlign = "center"

        let explainP = document.createElement("p")
        explainP.style.position = "absolute"
        explainP.style.left = "50%"
        explainP.style.top = "40%"
        explainP.style.transform = "translate(-50%,-50%)"
        explainP.innerText = this.EXPLAIN
        explainDiv.appendChild(explainP)

        let buttonContainerDiv = document.createElement("div")
        buttonContainerDiv.style.width = "100%"
        buttonContainerDiv.style.height = "15%"
        buttonContainerDiv.style.textAlign = "center"

        let firstButton = document.createElement("input")
        firstButton.type = "button"
        firstButton.addEventListener("click",firstButtonEvent.bind(this))
        firstButton.value = this.FIRST_VALUE;
        firstButton.classList.add("jh_modal_button")
        firstButton.style.marginRight = "10px"

        let secondButton = document.createElement("input")
        secondButton.type = "button"
        secondButton.addEventListener("click",secondButtonEvent.bind(this))
        secondButton.value = this.SECOND_VALUE;
        secondButton.classList.add("jh_modal_button")

        buttonContainerDiv.appendChild(firstButton)
        buttonContainerDiv.appendChild(secondButton)

        if(this.TITLE) {
            let titleDiv = document.createElement("div")
            titleDiv.innerText = this.TITLE
            explainDiv.style.height = "75%"
            titleDiv.style.height = "10%"
            titleDiv.style.textAlign = "center"
            titleDiv.style.fontSize = "14pt"
            titleDiv.style.fontWeight = "bold"
            containerDiv.appendChild(titleDiv)
        }

        containerDiv.appendChild(explainDiv)
        containerDiv.appendChild(buttonContainerDiv)
        bodyContainer.appendChild(containerDiv)
    }

    JH_twoChoiceModal.prototype.firstEvent = function () {

    }

    JH_twoChoiceModal.prototype.secondEvent = function () {

    }

    function firstButtonEvent (event) {
        this.firstEvent()
        event.currentTarget.parentNode.parentNode.remove()
    }


    function secondButtonEvent (event) {
        this.secondEvent()
        event.currentTarget.parentNode.parentNode.remove()
    }

    return JH_twoChoiceModal
}())

const JH_oneChoiceModal = (function () {

    /**
     * @param TITLE:제목
     * @param EXPLAIN:문구
     * @param FIRST_BUTTON:첫버튼문구
     * @constructor
     */
    function JH_oneChoiceModal (TITLE,EXPLAIN,FIRST_BUTTON,WIDTH=300,HEIGHT=200) {
        this.TITLE = TITLE
        this.EXPLAIN = EXPLAIN
        this.FIRST_VALUE = FIRST_BUTTON
        this.WIDTH = WIDTH
        this.HEIGHT = HEIGHT

        this.paint()
    }

    JH_oneChoiceModal.prototype.paint = function () {
        let bodyContainer = document.getElementsByTagName("body")[0]

        let containerDiv = document.createElement("div")
        containerDiv.style.border="1px solid black"
        containerDiv.style.borderRadius = "5px"

        if(this.WIDTH) {
            containerDiv.style.width = this.WIDTH+"px"
        }
        else {
            containerDiv.style.width = "300px"
        }

        if(this.HEIGHT) {
            containerDiv.style.height = this.HEIGHT+"px"
        }
        else {
            containerDiv.style.height = "200px"
        }

        containerDiv.style.position = "absolute"
        containerDiv.style.left = "calc(50% - "+Number(containerDiv.style.width.split("px")[0])/2+"px)"
        containerDiv.style.top = "calc(50% - "+Number(containerDiv.style.height.split("px")[0])/2+"px)"

        let explainDiv = document.createElement("div")
        explainDiv.style.width = "100%"
        explainDiv.style.height = "85%"
        explainDiv.style.textAlign = "center"

        let explainP = document.createElement("p")
        explainP.style.position = "absolute"
        explainP.style.left = "50%"
        explainP.style.top = "40%"
        explainP.style.transform = "translate(-50%,-50%)"
        explainP.innerText = this.EXPLAIN
        explainDiv.appendChild(explainP)

        let buttonContainerDiv = document.createElement("div")
        buttonContainerDiv.style.width = "100%"
        buttonContainerDiv.style.height = "15%"
        buttonContainerDiv.style.textAlign = "center"

        let firstButton = document.createElement("input")
        firstButton.type = "button"
        firstButton.addEventListener("click",firstButtonEvent.bind(this))
        firstButton.value = this.FIRST_VALUE;
        firstButton.classList.add("jh_modal_button")

        buttonContainerDiv.appendChild(firstButton)

        if(this.TITLE) {
            let titleDiv = document.createElement("div")
            titleDiv.innerText = this.TITLE
            explainDiv.style.height = "75%"
            titleDiv.style.height = "10%"
            titleDiv.style.textAlign = "center"
            titleDiv.style.fontSize = "14pt"
            titleDiv.style.fontWeight = "bold"
            containerDiv.appendChild(titleDiv)
        }

        containerDiv.appendChild(explainDiv)
        containerDiv.appendChild(buttonContainerDiv)
        bodyContainer.appendChild(containerDiv)
    }

    JH_oneChoiceModal.prototype.firstEvent = function () {

    }

    function firstButtonEvent (event) {
        this.firstEvent()
        event.currentTarget.parentNode.parentNode.remove()
    }

    return JH_oneChoiceModal
}())
