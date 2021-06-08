import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/external-modules/app.external.module';
try {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
catch(e){
  console.log('ok')
}
