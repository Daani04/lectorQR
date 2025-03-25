import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarcodeScannerComponent } from "./barcode-scanner/barcode-scanner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarcodeScannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CodigoBarrasZXing';
}
