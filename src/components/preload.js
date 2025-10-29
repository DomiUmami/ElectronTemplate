const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('jigglerAPI', {
  toggle: (options) => ipcRenderer.send('toggle-jiggler', options),
});
