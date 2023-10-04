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
  selector: 'clearing-table',
  template: `

        <div class="row mt-3">
          <div class="col-6 pe-0 py-0" type="button">
            <div class="card border-3 border-end-0 border-top-0 border-start-0 border-warning rounded-0 transition-tab">
              <div class="card-body text-center">
                <p class="mb-0 fz-20 ff-kr text-mist transition-tab" >รายการรอเคลียร์<span class="ff-mr">(6)</span></p>
              </div>
            </div>
          </div>
          <div class="col-6 ps-0 py-0" type="button">
            <div class="card border-0 border-bottom border-secondary rounded-0 transition-tab">
              <div class="card-body text-center">
                <p class="mb-0 fz-20 ff-kr text-mist transition-tab">ประวัติการเคลียร์ริ่ง<span class="ff-mr">(3)</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="card rounded-0 border-0" style="min-height: 54px;">
          <div class="card-body py-0">
          
            <div class="row h-100 pt-0">
              <div class="col-8">
                <div class="row h-100">
                  <div class="col-md-6 col-xl-3 py-0">
                    <div class="row">
                      <label for="" class="col-5 py-0">ชนิดทอง: </label>
                      <select name="" id="" class="col-7 border-0 py-0 h-100">
                        <option value="">ทั้งหมด</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-3  py-0">
                    <div class="row">
                        <label for="" class="col-5 py-0">สถานะ: </label>
                        <select name="" id="" class="col-7 border-0 py-0 h-100">
                          <option value="">ทั้งหมด</option>
                        </select>
                     </div>
                    </div>
                  <div class="col-md-6 col-xl-3  py-0">
                    <div class="row">
                        <label for="" class="col-5 py-0">ประเภท: </label>
                        <select name="" id="" class="col-7 border-0 py-0 h-100">
                          <option value="">ทั้งหมด</option>
                        </select>
                     </div>
                  </div>
                  <div class="col-md-6 col-xl-3  py-0">
                    <div class="row">
                        <label for="" class="col-5 py-0">ฝั่ง: </label>
                        <select name="" id="" class="col-7 border-0 py-0 h-100">
                          <option value="">ทั้งหมด</option>
                        </select>
                     </div>
                  </div>
                </div>
              </div>
              <div class="col-4 pt-1 text-end">
                <div class="d-flex justify-content-end">
                <switches></switches>
                </div>
              </div>
            </div>

          </div>
        </div>

        <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem', 'font-family':'Kanit-Regular', 'border-bottom-left-radius':'15px', 'border-bottom-right-radius':'15px', 'border-bottom': '1px solid red', 'overflow':'hidden'}">
            <ng-template pTemplate="header">
                <tr class="fz-14">
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">รายการซื้อขาย</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">เวลาทำรายการ</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">ประเภท</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">ราคา</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">ปริมาณ</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">มูลค่า</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">วันครบกำหนด</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">เบี้ยปรับ</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist">การรับชำระ</th>
                    <th class="p-0 ff-km py-2 text-center bg-secondary text-mist"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-product>
                <tr class="ff-kr fz-14">
                    <td class="py-1">
                      <div class="row py-0 align-items-start" style="min-width: 170px;" >
                        <div class="col-3 py-1">
                          <img src="assets/images/lhc-gold-tab-active.svg" class="ww-21">
                        </div>
                        <div class="col-9 p-0 ">
                          <div class="py-1 fz-16 ff-km">ทองคำแท่ง96.50%</div>
                          <div class="py-1 fz-14 text-haze ff-kt">B###23000006</div>
                        </div>
                      </div>
                    </td>
                    <td class=" py-1">
                      <div class="row py-0 text-center ">
                        <div class="col-12 py-1 ff-mr fz-16">04/09/2023</div>
                        <div class="col-12 py-1 ff-kt text-haze">11:00:00</div>
                      </div>
                    </td>
                    <td class=" py-1">
                      <div class="row py-0 text-center">
                        <div class="col-12 py-1 fz-16"><span class="btn btn-primary rounded-pill ff-mr py-0 text-white py-0 fz-{{!isLageView?'16':'16'}}">Buy</span></div>
                        <div class="col-12 py-1 ff-mr text-haze fz-14">OCO</div>
                      </div>
                    </td>
                    <td class=" py-1">
                        <div class="row py-0 text-center">
                          <div class="col-12 py-1 ff-mr fz-16">32,100</div>
                          <div class="col-12 py-1 ff-mr text-white fz-16">32,350</div>
                        </div>
                      </td>
                    <td class=" py-1">
                        <div class="row py-0 text-center" style="width: 150px;">
                          <div class="col-12 py-1 ff-mr fz-16}">1</div>
                          <div class="col-12 py-1 ff-kt text-haze" >ค้างชำระ <span class="ff-ml">2</span></div>
                        </div>
                    </td>
                    <td class=" py-1 ">
                        <div class="row py-0 text-center" style="width: 150px;">
                          <div class="col-12 py-1 ff-mr fz-16}">10,302,100</div>
                          <div class="col-12 py-1 ff-kt text-haze">ค้างชำระ <span>63,000</span></div>
                        </div>
                    </td>
                    <td class="py-1 text-center">
                        <div class="col-12 py-1 ff-mr fz-16">07/09/2023</div>
                        <div class="col-12 py-1 ff-kt text-white">t</div>
                    </td>
                    <td class="py-1 text-center" style="min-width: 70px;">
                        <div class="col-12 py-1 ff-mr fz-16">0</div>
                        <div class="col-12 py-1 ff-kt text-white">t</div>
                    </td>
                    <td class="py-1 text-center">
                        <div class="col-12 py-1 ff-kr fz-16">
                          <span class="d-block rounded fz-14 mb-1 bg-primary" style="width: 81px; height: 21px;">ชำระ</span>
                          <span class="d-block rounded fz-14  border border-warning fz-14" style="width: 81px; height: 21px;">ชำระ</span>
                        </div>
                    </td>
                    <td class="py-1 ">
                      <div class="row">
                        <div class="col-12 ps-0 text-end"><i class="pi pi-align-right fz-20" style="color: #708090"></i></div>
                        <div class="col-12 py-1 ff-kt text-white">t</div>
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
export class ClearingTableComponent implements OnChanges {

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
    console.log(changes);
  }
}
