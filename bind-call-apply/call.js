'use strict'
class File {
    showMessage () {
        console.log('watch from file')
        this.callFunction()
    }

    callFunction () {
        console.log('call function')
    }
}

const file = new File()

//call the showMessage function context. (callFunction is replaced by another function)
file.showMessage.call({callFunction: () => console.log('fake watch from call')})