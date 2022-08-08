import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dynamic-component-renderer',
  templateUrl: './dynamic-component-renderer.component.html',
  styleUrls: ['./dynamic-component-renderer.component.scss']
})
export class DynamicComponentRendererComponent implements OnInit {
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget: any;
  @Input() component: any;
  @Input() data: any;
  @Input() section: any;
  @Input() filterData: any;
  @Input() filterDropdown: boolean;
  @Input() set isAllFilterRemoved(event: { isRemoved: boolean }) {
    if (this.customComponent && this.customComponent.instance) {
      this.customComponent.instance.isFilterRemoved = event;
    }
  }
  @Output() handleFilterChange:EventEmitter<string> = new EventEmitter();
  @Output()
  public handleUpdatedData:EventEmitter<string> = new EventEmitter();
  private customComponent: any;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.createCustomComponent();
  }

  /**
   * @description This method is used to create the compoenent dynamically
   *
   * @protected
   * @memberof DynamicComponentRendererComponent
   */
  protected createCustomComponent() {
    if (this.component && this.component.componentName) {
      const componentFactory = this.resolver.resolveComponentFactory(this.component.componentName);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);
      this.customComponent.instance.tabOptions = this.component.data;
      this.customComponent.instance.width = this.component.width;
      this.customComponent.instance.data = this.component;
      this.customComponent.instance.section = this.section;
      this.customComponent.instance.tableData = this.data;
      this.customComponent.instance.columnConfig = this.filterData;
      this.customComponent.instance.isFilterDropdown = this.filterDropdown;

      if (this.customComponent.instance.handleSelectedData){
        const sub:Subscription = this.customComponent.instance.handleSelectedData.subscribe((event) =>{
          if (event) {
            this.handleUpdatedData.emit(event);
          } else if (this.filterDropdown) {
            this.handleUpdatedData.emit(event);
          }
        });
          this.customComponent.onDestroy(()=> { sub.unsubscribe();});
      }
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
