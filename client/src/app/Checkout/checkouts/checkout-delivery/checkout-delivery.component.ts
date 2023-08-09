import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from 'src/app/basket/basket.service';
import { IDelivery } from 'src/app/prodsharemod/models/IDelivery';
import { CheckoutServiceService } from '../../checkout-service.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit{
  @Input() deliveryForm?: FormGroup;
  deliverys : IDelivery[]=[];

 
  
  constructor(private checkoutService: CheckoutServiceService, private basketService : BasketService){}

  ngOnInit(): void {
    this.checkoutService.GetDeliveryMethod().subscribe(
      {
        next: delivery => {    
          this.deliverys = delivery}     
      }
    )
  }

  setDeliveryPrice(delivery:IDelivery){
      this.basketService.SetDelivery(delivery);
  }

}
