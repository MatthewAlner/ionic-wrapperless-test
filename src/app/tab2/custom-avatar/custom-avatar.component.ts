import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-custom-avatar',
  templateUrl: './custom-avatar.component.html',
  styleUrls: ['./custom-avatar.component.scss'],
})
export class CustomAvatarComponent implements OnInit, AfterViewInit {
  @ViewChild('content', {static: true, read: TemplateRef}) actualContentTmpl: TemplateRef<any>;

  constructor(private root: ViewContainerRef) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.root.createEmbeddedView(this.actualContentTmpl);
  }

}
