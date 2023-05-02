import {dialog, WebContents} from 'electron';
import fs from 'node:fs';
import ParkPlace from "./protocol/ParkPlace";

export default function importFile() {
    dialog.showOpenDialog({
        properties: ['openFile', 'multiSelections'],
        filters: [
            {name: '', extensions: ['dump']}
        ]
    })
        .then(res => {
            const promises = []
            res.filePaths.forEach((filePath) => {
                const data = fs.readFileSync(filePath)
                const protocol = new ParkPlace();
                protocol.decode(data);
                promises.push(protocol.persistence())
            })
            const result = promises.reduce((p, c) => {
                return p.then(() => c)
            }, Promise.resolve());

            result.then(() => {
                const webContents: WebContents = global.webContents;
                webContents.send('import-success');
            });
        })
}