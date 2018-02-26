import { Directive, ElementRef, HostListener, Renderer2, Output, Input, EventEmitter } from '@angular/core';

@Directive({
	selector: '[scroller]'
})
export class LoadmoreDirective {
	@Input() thrashhold: any;
	@Output() onReachedBottom = new EventEmitter();
	constructor(private renderer: Renderer2, private el: ElementRef) {
		console.log('e');
	}

	ngOnInit() {
		//this.renderer.setProperty(this.el.nativeElement, 'alt', 'Cute alligator');
	}
	@HostListener('scroll', ['$event']) scrolling(event) {
		console.log(this.thrashhold, 'thrashhold');
		let tracker = event.target;
		let limit = tracker.scrollHeight - tracker.clientHeight;
		if (Math.abs(event.target.scrollTop - limit) < this.thrashhold) {
			console.log('end reached');
			this.onReachedBottom.emit();
		}
		console.log('scrolling');
	}

	@HostListener('click') clicking() {
		console.log('clicking...');
	}

}
