import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

import * as xhr2 from 'xhr2';
xhr2.prototype._restrictedHeaders = {};


if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
