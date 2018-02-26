import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	loadMore() {
		this.arr1.push.apply(this.arr1, this.arr2);
	}
}
