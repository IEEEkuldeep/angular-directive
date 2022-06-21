import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  constructor(private tempRef:TemplateRef<any>, private viewConntRef: ViewContainerRef) { }

  @Input() set appStructural(values: any){
    
    // for (let index = 0; index < values.length; index++) {
      if(values % 2 ==0){
        this.viewConntRef.createEmbeddedView(this.tempRef);
      }
      else{
        this.viewConntRef.clear()
      }
      
    // }
    
  }

  

}
