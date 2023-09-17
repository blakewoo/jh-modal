const JH_okcanelModal = (function () {

    /**
     * @param TITLE:제목
     * @param EXPLAIN:문구
     * @param OK:ok버튼문구
     * @param CANCEL:cancel버튼문구
     * @constructor
     */
    function JH_okcanelModal (TITLE,EXPLAIN,OK,CANCEL) {
        this.TITLE = TITLE
        this.EXPLAIN = EXPLAIN
        this.OK_VALUE = OK
        this.CANCEL_VALUE = CANCEL

        this.paint()
    }

    JH_okcanelModal.prototype.paint = function () {
        let bodyContainer = document.getElementsByTagName("body")[0]

        let containerDiv = document.createElement("div")
        containerDiv.style.border="1px solid black"
        containerDiv.style.borderRadius = "2px"
        containerDiv.style.width = "300px"
        containerDiv.style.height = "200px"
        containerDiv.style.position = "absolute"
        containerDiv.style.left = ""
        containerDiv.style.top = ""

        let explainDiv = document.createElement("div")
        explainDiv.innerText = this.EXPLAIN
        explainDiv.style.width = "100%"
        explainDiv.style.height = "85%"
        explainDiv.style.textAlign = "center"

        let buttonContainerDiv = document.createElement("div")
        buttonContainerDiv.style.width = "100%"
        buttonContainerDiv.style.height = "15%"
        buttonContainerDiv.style.textAlign = "center"

        let okButton = document.createElement("input")
        okButton.type = "button"
        okButton.addEventListener("click",this.okEvent.bind(this))
        okButton.value = this.OK_VALUE;

        let cancelButton = document.createElement("input")
        cancelButton.type = "button"
        cancelButton.addEventListener("click",this.cancelEvent.bind(this))
        cancelButton.value = this.CANCEL_VALUE;

        buttonContainerDiv.appendChild(okButton)
        buttonContainerDiv.appendChild(cancelButton)

        if(this.TITLE) {
            let titleDiv = document.createElement("div")
            titleDiv.innerText = this.TITLE
            explainDiv.style.height = "75%"
            titleDiv.style.height = "10%"
            titleDiv.style.textAlign = "center"
            containerDiv.appendChild(titleDiv)

        }

        containerDiv.appendChild(explainDiv)
        containerDiv.appendChild(buttonContainerDiv)
        bodyContainer.appendChild(containerDiv)
    }

    JH_okcanelModal.prototype.okEvent = function (event) {
        alert("ddd")
    }

    JH_okcanelModal.prototype.cancelEvent = function (event) {
        this.parentNode.remove()
    }

    return JH_okcanelModal
}())