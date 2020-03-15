import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductsComponent} from './shop/products/products.component';
import {ShippingComponent} from './shop/shipping/shipping.component';
import {EditorComponent} from './shop/products/editor/editor.component';
import {UsersComponent} from './shop/users/users.component';
import {UsersEditorComponent} from './shop/users/users-editor/users-editor.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'shop', component: ShopComponent, children: [
      {path: '', component: ProductsComponent},
      {path: 'editor', component: EditorComponent},
      {path: 'editor/:id', component: EditorComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/editor', component: EditorComponent},
      {path: 'products/editor/:id', component: EditorComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/editor', component: UsersEditorComponent},
      {path: 'users/editor/:id', component: UsersEditorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
