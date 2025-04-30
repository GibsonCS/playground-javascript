'use strict'
import {watch} from 'node:fs'
import {readFile} from 'fs/promises'

class File {
    monitor(event, filename) {
        console.log(event, filename)

        this.showContent(filename)
    }

    async showContent (filename) {
        console.log((await readFile(filename)).toString())
    }
}
const file = new File()

// "this" context is lost
const functionWithoutThisContext =  file.watch

// With bind, "this" context of the file is mainteined
watch(`${process.cwd()}/bind.js`, file.monitor.bind(file))