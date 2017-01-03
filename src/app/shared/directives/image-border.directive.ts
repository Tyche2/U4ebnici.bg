import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appImageBorder]'
})

export class ImageBorderDirective {

    constructor(private element: ElementRef) {
        console.log('here');
    }

    @HostListener('mouseenter') onMouseEnter() {
         console.log('mouseenter');
        this.addBorder();
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log('mouseleave');
        this.removeBorder();
    }

    private addBorder() {
        this.element.nativeElement.style.border = 'solid gray 5px';
    }

    private removeBorder() {
        this.element.nativeElement.style.border = 'none';
    }

}

