import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentOption: string = 'full';
  quantity: number = 0;

  calculateTotalAmount(): number {
    if (this.quantity && this.quantity > 0) {
      const pricePerItem: number = 15.00; // Giả sử giá là $15.00
      return this.paymentOption === 'full' ? this.quantity * pricePerItem : (this.quantity * pricePerItem) / 2;
    }
    return 0;
  }

  submitCashPaymentForm() {
    // Thêm logic xử lý khi người dùng nộp form, ví dụ: gọi API thanh toán
    const totalAmount = this.calculateTotalAmount();
    console.log(`Thanh toán thành công: ${totalAmount}`);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/homepage']); // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }
  

}
