import {dialog, ipcMain} from 'electron';

ipcMain.handle('import-file', () => {
    dialog.showOpenDialog({
        filters: [
            {name: '', extensions: ['dump']}
        ]
    })
        .then(res => {
            const filePath = res.filePaths[0];
            console.log(filePath);
        })
})
