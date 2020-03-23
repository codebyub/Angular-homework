import {Component, OnInit} from '@angular/core';
import {Product} from './Product';
import {ProductStorageService} from '../../product-storage.service';
import {HttpClientService} from '../../http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productStorage: ProductStorageService, private httpClient: HttpClientService) {
  }

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  removeProduct(id: number) {
    this.httpClient.removeProduct(id).subscribe(r => {
      this.getProducts();
    });
  }

  getProducts() {
    this.httpClient.getProducts().subscribe(products => this.products = products);
  }

}
