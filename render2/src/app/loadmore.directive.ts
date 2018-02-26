import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appLoadmore]'
})
export class LoadmoreDirective {

	constructor(private renderer: Renderer2, private el: ElementRef) { }

	ngOnInit() {
		this.renderer.setProperty(this.el.nativeElement, 'alt', 'Cute alligator');
	}
	@HostListener('scroll', ['$event']) private onScroll($event: Event): void {
		console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
	};

}
