let fs = require('fs')

let intro = 'Welcome to a new RA preservation project. To preserve video gaming history, we have decided to publish videos of classic games played on real hardware. These are presented as is, with no cropping, no filters, and no commentary - just the raw footage. Feel free to use these videos in your own creations as you see fit.'

fs.readFile(process.argv[2], {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
        obj = JSON.parse(data)
        console.log(intro)
        console.log('\n')
        console.log('Title: ' + obj.game.title)
        console.log('Developer: ' + obj.game.developer)
        console.log('Publisher: ' + obj.game.publisher)
        console.log('Year: ' + obj.game.year)
        console.log('Machine: ' + obj.system.machine + ' (' + obj.system.colorEncoding + ')')
        console.log('Source: ' + obj.recording.source)
        console.log('Equipment: ' + obj.recording.equipment)
    }
    else {
        console.log('Error reading file:', err)
    }
})