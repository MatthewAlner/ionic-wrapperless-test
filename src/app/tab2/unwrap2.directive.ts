import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appUnwrap2]'
})
export class Unwrap2Directive {
    constructor(private el: ElementRef) {
        const parentElement = el.nativeElement.parentElement;
        const element = el.nativeElement;
        parentElement.removeChild(element);
        parentElement.parentNode.insertBefore(element, parentElement.nextSibling);
        parentElement.parentNode.removeChild(parentElement);
    }
}
