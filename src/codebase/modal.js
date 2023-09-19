const JH_okCancelModal = (function () {

    /**
     * @param TITLE:제목
     * @param EXPLAIN:문구
     * @param OK:ok버튼문구
     * @param CANCEL:cancel버튼문구
     * @constructor
     */
    function JH_okCancelModal (TITLE,EXPLAIN,OK,CANCEL,WIDTH=300,HEIGHT=200) {
        this.TITLE = TITLE
        this.EXPLAIN = EXPLAIN
        this.OK_VALUE = OK
        this.CANCEL_VALUE = CANCEL
        this.WIDTH = WIDTH
        this.HEIGHT = HEIGHT

        this.paint()
    }

    JH_okCancelModal.prototype.paint = function () {
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

        let okButton = document.createElement("input")
        okButton.type = "button"
        okButton.addEventListener("click",okEvent.bind(this))
        okButton.value = this.OK_VALUE;
        okButton.classList.add("jh_modal_button")
        okButton.style.marginRight = "10px"

        let cancelButton = document.createElement("input")
        cancelButton.type = "button"
        cancelButton.addEventListener("click",cancelEvent)
        cancelButton.value = this.CANCEL_VALUE;
        cancelButton.classList.add("jh_modal_button")

        buttonContainerDiv.appendChild(okButton)
        buttonContainerDiv.appendChild(cancelButton)

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

    JH_okCancelModal.prototype.okDoingFunc = function () {

    }

    function okEvent (event) {
        this.okDoingFunc()
        event.currentTarget.parentNode.parentNode.remove()
    }


    function cancelEvent (event) {
        event.currentTarget.parentNode.parentNode.remove()
    }

    return JH_okCancelModal
}())