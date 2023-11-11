import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderDataService {
    private orderUrl = 'https://13.212.24.193/api/v1/orders/';

    constructor(private http: HttpClient) { }

    getOrder() {
        return this.http.get(this.orderUrl);
    }
    getOrderById(orderId: String): Observable<any> {
        return this.http.get(this.orderUrl + orderId);
    }
    addOrder(item): Observable<any> {
        return this.http.post(this.orderUrl, item)
    }
    deleteOrderById(orderId: String): Observable<any> {
        return this.http.delete(this.orderUrl + orderId);
    }

}