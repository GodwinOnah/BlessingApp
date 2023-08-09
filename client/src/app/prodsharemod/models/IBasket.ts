import { v4 as uuidv4 } from 'uuid';
import { Address } from './User';

export interface IBasket {
  id: string;
  items: IBasketItem[];
  clientSecret?: string;
  paymentItentId?: string;
  deliveryId?: number;
  deliveryPrice:number
}

export interface IBasketItem {
  productId: number
  prodName: string
  prodPrice: number
  quantity:number
  prodPicture: string
  productBrand: string
  productType: string
}

export class Basket implements IBasket {
   id= uuidv4();
    items=[];
    deliveryPrice=0;

}


export interface TotalBasketPrice {
       deliveryPrice: number
       subTotal: number
       total: number
     
      
    }


