import {dialog, WebContents} from 'electron';
import fs from 'node:fs';
import ParkPlace from "./protocol/ParkPlace";

export default function importFile(protocol: ParkPlace) {
    dialog.showOpenDialog({
        filters: [
            {name: '', extensions: ['dump']}
        ]
    })
        .then(res => {
            const filePath = res.filePaths[0];
            fs.readFile(filePath, (err, data) => {
                protocol.decode(data);
                protocol.persistence()
                    .then(() => {
                        const webContents: WebContents = global.webContents;
                        webContents.send('import-success');
                    })
            })
        })
}