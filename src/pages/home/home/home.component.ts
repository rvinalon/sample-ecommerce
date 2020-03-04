import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


	items$: Observable<any>;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.items$ = this.http.get('https://apis.wallet-codes.com/product/1/denominations?country_id=5e15cdc56ca865c5378ff4d7&language_id=5e0f176fbffaa5934e3e5fb4&require_payment=true&payment_method_limit=1&exclude_points=true')
	}

}
