import { ElectronContextBridge } from "../electron/preload";

declare global {
  interface Window {
    electron: ElectronContextBridge;
  }
}
