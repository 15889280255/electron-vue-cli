import app from "./app";
import ipc from "./ipc";
import windows from "./windows";

export default {
  init(appManager) {
    app.init(appManager, {
      windowsReady() {
        windows.init(appManager);
        ipc.init(appManager);
      },
    });
    // process.init(appManager);
  },
};
