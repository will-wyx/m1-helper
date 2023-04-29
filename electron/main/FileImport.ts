import {dialog, ipcMain} from 'electron';
import fs from 'node:fs';
import ParkPlace from "./protocol/ParkPlace";

ipcMain.handle('import-file', () => {
    dialog.showOpenDialog({
        filters: [
            {name: '', extensions: ['dump']}
        ]
    })
        .then(res => {
            const filePath = res.filePaths[0];
            console.log(filePath);
            fs.readFile(filePath, (err, data) => {
                const protocol = new ParkPlace(data);
            })
        })
})

function bufferToHex(buf) {
    let iter = buf.values();
    let hexArr = [];
    for (let item of iter) {
        hexArr.push(item.toString(16));
    }
    console.log(hexArr.join(''));
}
