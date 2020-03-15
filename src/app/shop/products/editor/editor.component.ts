import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductStorageService} from '../../../product-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../http-client.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private productStorage: ProductStorageService, private router: Router, private activeRoute: ActivatedRoute, private httpClient: HttpClientService) { }

  product: Product = new Product();

  ngOnInit(): void {
    this.getProductToEdit();
  }

  saveProducts(product: Product) {
      this.httpClient.saveProduct(product).subscribe(r => this.router.navigate(['/shop']));
  }

  getProductToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // tslint:disable-next-line:radix
        this.httpClient.getProduct(Number.parseInt(id)).subscribe(p => this.product = p);
      }
    });
  }
}
