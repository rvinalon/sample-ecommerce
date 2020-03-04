import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

	@Input() source: string;
	constructor() { }

	ngOnInit(): void {
	}

}
