import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  maximize: () => {
    ipcRenderer.send("maximize");
  },
  minimize: () => {
    ipcRenderer.send("minimize");
  },
  close: () => {
    ipcRenderer.send("close");
  },
});
