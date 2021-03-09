import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {

  @Input('appForEm') list: number[]

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    for (const item of this.list) {
      this.container.createEmbeddedView(
        this.template,
        { $implicit: item }
      )
    }
  }

  // <ul>
  //   <li *appFor="let n em [1, 2, 3]">
  //     {{ n }}
  //   </li>
  // </ul>
}
