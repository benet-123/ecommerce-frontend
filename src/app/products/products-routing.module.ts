import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [{ path: '', component: AllProductsComponent }, //localhost:4200-all product details
{path: 'cart', component: CartComponent },
{path: 'wishlist', component: WishlistComponent },
{path: '**', component: PageNotFoundComponent  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
