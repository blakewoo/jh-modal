const JH_okcanelModal = (function () {

    function JH_okcanelModal (TITLE,EXPLAIN,OK,CANCEL) {
        this.TITLE = ""
        this.EXPLAIN = ""
        this.OK_VALUE = ""
        this.CANCEL_VALUE = ""

        this.paint()
    }

    JH_okcanelModal.prototype.paint = function () {
        let bodyContainer = document.getElementsByTagName("body")[0]

        let containerDiv = document.createElement("div")
        containerDiv.style.border="1px solid black"
        containerDiv.style.borderRadius = "2px"
        containerDiv.style.position = "absolute"
        containerDiv.style.left = ""
        containerDiv.style.top = ""

        let explainDiv = document.createElement("div")
        explainDiv.innerText = this.EXPLAIN

        let okButton = document.createElement("input")
        okButton.type = "button"
        okButton.addEventListener("click",this.okEvent.bind(this))
        okButton.innerText = this.OK_VALUE;

        let cancelButton = document.createElement("input")
        cancelButton.type = "button"
        cancelButton.addEventListener("click",this.cancelEvent.bind(this))
        cancelButton.innerText = this.CANCEL_VALUE;


        if(this.TITLE) {
            let titleDiv = document.createElement("div")
            titleDiv.innerText = this.TITLE
            containerDiv.appendChild(titleDiv)
        }

        containerDiv.appendChild(explainDiv)
        containerDiv.appendChild(okButton)
        containerDiv.appendChild(cancelButton)
        bodyContainer.appendChild(containerDiv)
    }

    JH_okcanelModal.prototype.okEvent = function (event) {

    }

    JH_okcanelModal.prototype.cancelEvent = function (event) {
        this.parentNode.remove()
    }

    return JH_okcanelModal
}())