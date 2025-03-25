import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BarcodeScannerComponent } from './app/barcode-scanner/barcode-scanner.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers || [])] // Mantiene los providers definidos en appConfig
})
  .catch((err) => console.error(err));


  //SE HA REALIZADO UNA MODIFICACION PARA QUE FUNCIONE EL SCANER DE CODIGOS DE BARRAS 
