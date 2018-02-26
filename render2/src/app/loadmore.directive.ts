import { Directive, ElementRef, HostListener, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[scroller]'
})
export class LoadmoreDirective {
	@Output() onReachedBottom = new EventEmitter();
	constructor(private renderer: Renderer2, private el: ElementRef) {
		console.log('e');
	}

	ngOnInit() {
		this.renderer.setProperty(this.el.nativeElement, 'alt', 'Cute alligator');
	}
	@HostListener('scroll', ['$event']) scrolling(event) {
		let tracker = event.target;

		let limit = tracker.scrollHeight - tracker.clientHeight;
		console.log(event.target.scrollTop, limit);
		if (event.target.scrollTop === limit) {
			console.log('end reached');
			this.onReachedBottom.emit();
		}
		console.log('scrolling');
	}

	@HostListener('click') clicking() {
		console.log('clicking...');
	}

}
