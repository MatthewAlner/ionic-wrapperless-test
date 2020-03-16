import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnwrap]'
})
export class UnwrapDirective {

  @Input() set appUnwrap(x: any) {
    this.vcRef.createEmbeddedView(this.templateRef.elementRef.nativeElement);
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
