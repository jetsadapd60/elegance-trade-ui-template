import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
  status: "Matched" | "Waiting" | "Cancelled"
}

@Component({
  selector: 'buy-sell-table',
  template: `

        <div class="row mt-3">
          <div class="col-6 pe-0 py-0" type="button">
            <div class="card border-3 border-end-0 border-top-0 border-start-0 border-warning rounded-0 transition-tab">
              <div class="card-body text-center">
                <p class="mb-0 fz-20 ff-kr text-mist transition-tab" >คำสั่งซื้อขาย<span class="ff-mr">(6)</span></p>
              </div>
            </div>
          </div>
          <div class="col-6 ps-0 py-0" type="button">
            <div class="card border-0 border-bottom border-secondary rounded-0 transition-tab">
              <div class="card-body text-center">
                <p class="mb-0 fz-20 ff-kr text-mist transition-tab">ประวัติการซื้อขาย<span class="ff-mr">(3)</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 rounded-0">
          <div class="card-body py-1">
            <div class="row">
              <div class="col-md-3 col-xxl-{{!view?'3':'2'}} offset-xxl-{{!view?'0':'1'}} py-0">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <label for="" class="fz-16" style="color: #9c9fa6;">ชนิดทอง: </label>
                  </div>
                  <div class="col">
                    <select  style="color: #9c9fa6;" class="form-select border-0 w-100  text-center" aria-label="Default select example">
                      <option value="1" selected>One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-xxl-{{!view?'3':'2'}} py-0">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <label for="" style="color: #9c9fa6;">สถานะ: </label>
                  </div>
                  <div class="col">
                    <select class="form-select border-0 w-100 text-center" style="color: #9c9fa6;" aria-label="Default select example">
                      <option value="1" selected>One</option>
                      <option value="2">TwoTwoTwoTwo</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-xxl-{{!view?'3':'2'}} py-0">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <label for="" style="color: #9c9fa6;">ประเภท: </label>
                  </div>
                  <div class="col">
                    <select style="color: #9c9fa6;" class="form-select border-0 w-100 text-center" aria-label="Default select example">
                      <option value="1" selected>One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-xxl-{{!view?'3':'2'}} py-0">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <label for="" style="color: #9c9fa6;">ฝั่ง: </label>
                  </div>
                  <div class="col">
                    <select style="color: #9c9fa6;" class="form-select border-0 w-100 text-center" aria-label="Default select example">
                      <option value="1" selected>One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem', 'font-family':'Kanit-Regular', 'border-bottom-left-radius':'15px', 'border-bottom-right-radius':'15px', 'border-bottom': '1px solid red', 'overflow':'hidden'}">
            <ng-template pTemplate="header">
                <tr class="fz-14">
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">No.</th>
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">รายการซื้อขาย</th>
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">เวลาทำรายการ</th>
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">ประเภท</th>
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">ราคา</th>
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">ปริมาณ</th>
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">มูลค่า</th>
                    <th class="px-0 ff-km py-2 text-center bg-secondary text-mist">สถานะ</th>
                    <th class="px-0 ff-km py-2 text-end bg-secondary text-mist" *ngIf="isLageView"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-product>
                <tr class="ff-kr fz-14">
                  <td class="py-0">
                      <div class="row py-0 text-center">
                        <div class="col-12 py-1">1</div>
                        <div class="col-12 py-1 ff-kt text-white">s</div>
                      </div>
                    </td>
                    <td class="py-3 px-{{!isLageView?'1':'3'}}">
                      <div class="row p-0 align-items-start">
                        <div class="col-3 py-1" [ngClass]="{'px-0': !isLageView}"><img src="assets/images/lhc-gold-tab-active.svg" class="w-100"></div>
                        <div class="col-9 p-0">
                          <div class="py-1 fz-{{!isLageView?'16':'16'}} ff-km">ทองคำแท่ง96.50%</div>
                          <div class="py-1 fz-{{!isLageView?'14':'16'}} ff-kt">B###23000006</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-0 py-0">
                      <div class="row py-0 text-center">
                        <div class="col-12 py-1 ff-mr fz-16">11/Sep/2566</div>
                        <div class="col-12 py-1 ff-kt fz-14 text-dull">11:00:00</div>
                      </div>
                    </td>
                    <td class="px-0 py-0">
                      <div class="row py-0 text-center">
                        <div class="col-12 py-1 fz-{{!isLageView?'16':'16'}}"><span class="btn btn-primary rounded-pill ff-mr py-0 text-white py-0 fz-{{!isLageView?'16':'16'}}">Buy</span></div>
                        <div class="col-12 py-1 ff-mr fz-{{!isLageView?'14':'14'}}">OCO</div>
                      </div>
                    </td>
                    <td class="px-0 py-0">
                        <div class="row py-0 text-center">
                          <div class="col-12 py-1 ff-mr fz-{{!isLageView?'16':'16'}}">32,100</div>
                          <div class="col-12 py-1 ff-mr fz-{{!isLageView?'16':'16'}}">32,350</div>
                        </div>
                      </td>
                    <td class="px-0 py-0">
                        <div class="row py-0 text-center">
                          <div class="col-12 py-1 ff-mr fz-{{!isLageView?'16':'16'}}">1</div>
                          <div class="col-12 py-1 ff-kt text-white">t</div>
                        </div>
                    </td>
                    <td class="px-0 py-0 ">
                        <div class="row py-0 text-center">
                          <div class="col-12 py-1 ff-mr fz-{{!isLageView?'16':'16'}}">10,302,100</div>
                          <div class="col-12 py-1 ff-mr fz-{{!isLageView?'16':'16'}}">32,350</div>
                        </div>
                    </td>
                    <td class="ps-0 py-0 ">
                        <div class="row text-end text-xxl-{{!isLageView?'end':'center'}}">
                          <div class="col-12 ps-0 py-0 mb-1 ff-mr fz-{{!isLageView?'16':'16'}} color-{{product.status}}" >{{product.status}}</div>
                          <div *ngIf="isLageView" class="col-12 py-1 ff-mr text-white fz-{{!isLageView?'16':'16'}}">e</div>
                          <div class="col-12 ps-0 ff-kt text-white d-flex gap-3 justify-content-end" *ngIf="!isLageView">
                            <div class="py-0 offset-3 text-end"><i class="bi bi-trash fz-{{!isLageView?'16':'22'}}" style="color: #708090"></i></div>
                            <div class="py-0 text-end"><i class="pi pi-align-right fz-{{!isLageView?'16':'22'}}" style="color: #708090"></i></div>
                          </div>
                        </div>
                    </td>
                    <td class="py-0 " *ngIf="isLageView">
                      <div class="row">
                        <div class="col-6 ps-0 text-center"><i class="bi bi-trash fz-22" style="color: #708090"></i></div>
                        <div class="col-6 ps-0 text-center"><i class="pi pi-align-right fz-20" style="color: #708090"></i></div>
                      </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>



  `,
  styles: [
    `
    .color {
      &-Matched { color: #1E9CD6}
      &-Waiting { color: #FE950D}
      &-Cancelled { color: #EE2C33}
    }
    `
  ]
})
export class BuySellTableComponent implements OnChanges {

  isLageView = !true;

  products: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Cancelled"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Matched"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Cancelled"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Matched"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      status: "Waiting"
    }
  ];
  
  
  @Input('showTradeView')
  set view(e: boolean) {
    console.log(e)
    this.isLageView = e;
  }
  
  get view() {
    return this.isLageView;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
