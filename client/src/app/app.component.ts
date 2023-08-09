import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './Account/account.service';
import { BasketService } from './basket/basket.service';
import { BnNgIdleService } from 'bn-ng-idle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{ 
  title = 'BagShop';

constructor(
  private basketService: BasketService,
  private accountService:UserAccountService,
  private logoutOutService : BnNgIdleService){
  }

ngOnInit(): void {
  this.loadBasket();
 this.loadPreviousUser(); 
  
     
}

loadBasket(){
  const basketId = localStorage.getItem('basket_id')   
  this.basketService.GetBasket(basketId);
}

loadPreviousUser(){
 const token = localStorage.getItem('token');
  this.accountService.LoadPreviousUser(token).subscribe();
}
}
