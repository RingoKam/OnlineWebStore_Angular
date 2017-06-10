import { ProductModel } from './../Interfaces/ProductModel';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ProductService implements OnInit {
  private url: string;
  public Products: any = [];

  constructor() { }

  ngOnInit() {
    this.url = document.getElementById('product-service-url').dataset.url;
  }


  getAllProducts(): Array<ProductModel> {
    const Products: Array<ProductModel> = [
      {
        'id': 1,
        'name': 'Rainy Night at Wall St 1',
        'description': 'Part of Rainy Night Series',
        'thumbNail': 'http://i.imgur.com/BApvnVsm.jpg',
        'fullImage': 'http://i.imgur.com/BApvnVs.jpg',
        'price': 100,
        'productCreated': '2017-06-04T00:00:00'
      },
      {
        'id': 6,
        'name': 'Rainy Night at Wall St 2',
        'description': 'Part of Rainy Night Series',
        'thumbNail': 'http://i.imgur.com/7CIjCUzm.jpg',
        'fullImage': 'http://i.imgur.com/7CIjCUz.jpg',
        'price': 150,
        'productCreated': '2017-06-05T00:00:00'
      },
      {
        'id': 9,
        'name': 'Rainy Night at Wall St 3',
        'description': 'Part of Rainy Night Series',
        'thumbNail': 'http://i.imgur.com/ntLsgjxm.jpg',
        'fullImage': 'http://i.imgur.com/ntLsgjx.jpg',
        'price': 120,
        'productCreated': '2017-06-05T00:00:00'
      }
    ];
    return Products;
  }
}
