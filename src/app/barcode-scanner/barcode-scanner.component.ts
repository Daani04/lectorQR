import { Component } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library'; // Importa BarcodeFormat
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [CommonModule, ZXingScannerModule],
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent {
  productInfo: { [key: string]: { name: string, description: string, calories?: number, price: string, brand: string } } = {
    '8720181027796': { name: 'Desodorante Axe', description: 'Desodorante en aerosol de larga duración.', price: '3.99€', brand: 'Axe' },
    '5060326275280': { name: 'Creatina', description: 'Suplemento deportivo para mejorar el rendimiento.', calories: 0, price: '19.99€', brand: 'MyProtein' },
    '8470001518422': { name: 'Toallitas Blefarix', description: 'Toallitas para la higiene ocular, suaves y efectivas.', price: '9.50€', brand: 'Blefarix' }
  };

  scannedCode: string = '';
  productDetails: any = null;
  isValid: boolean | null = null;
  
  // Definir los formatos de código de barras permitidos correctamente
  formats = [BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  onScanSuccess(event: any) {
    const result = event as string; // Asegurar que el evento se maneje como string
    this.scannedCode = result;
    
    if (this.productInfo[result]) {
      this.productDetails = this.productInfo[result];
      this.isValid = true;
    } else {
      this.productDetails = { name: 'Producto no encontrado', description: '' };
      this.isValid = false;
    }
  }
}