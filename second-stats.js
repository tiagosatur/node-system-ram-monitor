import * as OS from 'os'
import log from './logger.js'

const getMemMegaBytes = (mem) => {
    return parseInt(mem / 1024/ 1024)
}

const formatWithSymbol = (data, symbol) => {
    return `${data}${symbol}`;
}

setInterval(() => {
    const { freemem, totalmem } = OS
    const free = getMemMegaBytes(freemem())
    const total = getMemMegaBytes(totalmem())
    const percents = parseInt((free/total) * 100)
    
    const stats = {
        free: formatWithSymbol(free, ' Mb'),
        total: formatWithSymbol(total, ' Mb'),
        percents: formatWithSymbol(percents, '%'),
    }
    
    console.clear();
    console.table(stats)
    log(`${JSON.stringify(stats)}\n`)
}, 1000)






