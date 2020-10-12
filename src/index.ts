import * as singleSpa from 'single-spa';
import 'node_modules/systemjs/dist/system.min.js';
import 'node_modules/systemjs/dist/extras/amd.min.js';
import 'node_modules/systemjs/dist/extras/named-exports.min.js';
import 'node_modules/systemjs/dist/extras/named-register.min.js';
import 'node_modules/zone.js/dist/zone.min.js';

export const rootApp = {
  applications: [
    {
      name: 'dashboard-app',
      register: 'http://localhost:4200/main.js',
      mainApp: true
    }
  ],

  activityFunction(location: object, appName: string, mainApp: boolean) {
    return ((
      location: { pathname: string },
      appName: string,
      mainApp: boolean
    ) => {
      if (mainApp) {
        return true;
      }
      if (location.pathname.startsWith('/' + appName)) {
        return true;
      }
      return false;
    }).bind(window, location, appName, mainApp);
  },

  registeApplications() {
    this.applications.forEach(application => {
      singleSpa.registerApplication(
        application.name,
        () => System.import(application.register),
        () => this.activityFunction(application.name, application.mainApp)
      );
    });
  },

  startup() {
    this.registeApplications();
    singleSpa.start();
  }
};
rootApp.startup();
