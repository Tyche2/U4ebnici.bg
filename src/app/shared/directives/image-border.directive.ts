import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appImageBorder]'
})

export class ImageBorderDirective {

    constructor(private element: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.addBorder();
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.removeBorder();
    }

    private addBorder() {
        this.element.nativeElement.style.border = 'solid lightgray 3px';
    }

    private removeBorder() {
        this.element.nativeElement.style.border = 'none';
    }

}

