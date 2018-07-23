import fetch from 'node-fetch'
import * as sharp from 'sharp'
import * as path from 'path'


export class ImageWorker {
    constructor(private url: string) {

    }
    private fileBit: NodeJS.ReadableStream
    async loadFileAsync() {
        let res = await fetch(this.url)
        this.fileBit = res.body
    }

    async imageSave(dest: string, name: string, maxSize: number = null) {



        var sh = sharp()
        if (maxSize) {
            sh.resize(maxSize)
        }
        sh.jpeg().toFile(path.join(dest, name + '.jpeg'))

        this.fileBit.pipe(sh)
    }




}