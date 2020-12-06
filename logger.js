import * as events from 'events';
import * as fs from 'fs';
import * as path from 'path';


const emitter = new events.EventEmitter();

emitter.on('log', (message) => {
    fs.appendFile(path.join(path.resolve(), 'log.txt'), message, (error) => {
        if(error) throw error
    })
    console.log(" emitter", message)
})

function log(msg) {
    emitter.emit('log', msg)
}

export default log


