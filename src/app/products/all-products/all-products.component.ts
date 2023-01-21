import { CartService } from './../cart.service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allproducts:any=[]; //all products array of details
  searchterm:string=''
  // product:any
  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {

    this.api.getPrducts().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
   
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }


  addtowishlist(product:any){
this.api.addtowishlist(product).subscribe(  //tp connect with the api
  (result:any)=>{
    alert(result.message) //addedd successfully
  },
  (result:any)=>{
    alert(result.error.message)   //error message
  }
)
}

addcart(product:any){
  this.cart.addcart(product)
}
}

