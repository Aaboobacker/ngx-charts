/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/bar-chart/bar-horizontal.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../src/common/charts/chart.component';
import * as import12 from '../../../src/utils/injection.service';
import * as import13 from '../common/charts/chart.component.ngfactory';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../../../src/bar-chart/series-horizontal.component';
import * as import16 from './series-horizontal.component.ngfactory';
import * as import17 from '@angular/core/src/application_ref';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '../../../src/common/axes/x-axis.component';
import * as import22 from '../common/axes/x-axis.component.ngfactory';
import * as import23 from '../../../src/common/axes/y-axis.component';
import * as import24 from '../common/axes/y-axis.component.ngfactory';
export class Wrapper_BarHorizontal {
  /*private*/ _eventHandler:Function;
  context:import0.BarHorizontal;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  subscription0:any;
  subscription1:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.BarHorizontal(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_xAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.xAxis = currValue;
      this._changes['xAxis'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_yAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.yAxis = currValue;
      this._changes['yAxis'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_showXAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.showXAxisLabel = currValue;
      this._changes['showXAxisLabel'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_showYAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.showYAxisLabel = currValue;
      this._changes['showYAxisLabel'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_xAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.xAxisLabel = currValue;
      this._changes['xAxisLabel'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_yAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.yAxisLabel = currValue;
      this._changes['yAxisLabel'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_11,currValue);
      this._expr_11 = currValue;
    }
  }
  check_showGridLines(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.showGridLines = currValue;
      this._changes['showGridLines'] = new import1.SimpleChange(this._expr_12,currValue);
      this._expr_12 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.clickHandler.subscribe(_eventHandler.bind(view,'clickHandler'))); }
    if (emit1) { (this.subscription1 = this.context.legendLabelClick.subscribe(_eventHandler.bind(view,'legendLabelClick'))); }
  }
}
var renderType_BarHorizontal_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_BarHorizontal_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.BarHorizontal>;
  _BarHorizontal_0_3:Wrapper_BarHorizontal;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BarHorizontal_Host0,renderType_BarHorizontal_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'bar-horizontal',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BarHorizontal0(this.viewUtils,this,0,this._el_0);
    this._BarHorizontal_0_3 = new Wrapper_BarHorizontal(new import8.ElementRef(this._el_0),this.compView_0.ref,this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._BarHorizontal_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._BarHorizontal_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BarHorizontal) && (0 === requestNodeIndex))) { return this._BarHorizontal_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._BarHorizontal_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._BarHorizontal_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._BarHorizontal_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BarHorizontalNgFactory:import7.ComponentFactory<import0.BarHorizontal> = new import7.ComponentFactory<import0.BarHorizontal>('bar-horizontal',View_BarHorizontal_Host0,import0.BarHorizontal);
const styles_BarHorizontal:any[] = ([] as any[]);
var renderType_BarHorizontal:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_BarHorizontal,{});
export class View_BarHorizontal0 extends import2.AppView<import0.BarHorizontal> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  compView_1:import2.AppView<import11.Chart>;
  _InjectionService_1_5:import12.InjectionService;
  _Chart_1_6:import13.Wrapper_Chart;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import10.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import14.Wrapper_NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import10.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import14.Wrapper_NgIf;
  _text_8:any;
  _el_9:any;
  compView_9:import2.AppView<import15.SeriesHorizontal>;
  _SeriesHorizontal_9_3:import16.Wrapper_SeriesHorizontal;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _arr_25:any;
  /*private*/ _expr_26:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BarHorizontal0,renderType_BarHorizontal,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._arr_25 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_26 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import10.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import13.View_Chart0(this.viewUtils,this,1,this._el_1);
    this._InjectionService_1_5 = new import12.InjectionService(this.parentView.injectorGet(import17.ApplicationRef,this.parentIndex),this.parentView.injectorGet(import18.ComponentFactoryResolver,this.parentIndex),this.injector(1));
    this._Chart_1_6 = new import13.Wrapper_Chart(this._vc_1.vcRef,this._InjectionService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','bar-chart chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_5 = new import10.ViewContainer(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import19.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import14.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_7 = new import10.ViewContainer(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import19.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import14.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray2(2,'seriesHorizontal',''),(null as any));
    this.compView_9 = new import16.View_SeriesHorizontal0(this.viewUtils,this,9,this._el_9);
    this._SeriesHorizontal_9_3 = new import16.Wrapper_SeriesHorizontal();
    this.compView_9.create(this._SeriesHorizontal_9_3.context);
    this._text_10 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._Chart_1_6.context);
    this._text_12 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_1));
    this._Chart_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray2(2,'clickHandler',(null as any)),this.eventHandler(this.handleEvent_9));
    this._SeriesHorizontal_9_3.subscribe(this,this.eventHandler(this.handleEvent_9),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import20.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import19.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import20.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import15.SeriesHorizontal) && (9 === requestNodeIndex))) { return this._SeriesHorizontal_9_3.context; }
    if (((token === import12.InjectionService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._InjectionService_1_5; }
    if (((token === import11.Chart) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Chart_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_25(this.context.width,this.context.height);
    this._Chart_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.legend;
    this._Chart_1_6.check_legend(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.yDomain;
    this._Chart_1_6.check_legendData(currVal_1_0_2,throwOnChange,false);
    const currVal_1_0_3:any = this.context.colors;
    this._Chart_1_6.check_colors(currVal_1_0_3,throwOnChange,false);
    if (this._Chart_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.xAxis;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:any = this.context.yAxis;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = this.context.dims;
    this._SeriesHorizontal_9_3.check_dims(currVal_9_0_0,throwOnChange,false);
    const currVal_9_0_1:any = this.context.results;
    this._SeriesHorizontal_9_3.check_series(currVal_9_0_1,throwOnChange,false);
    const currVal_9_0_2:any = this.context.xScale;
    this._SeriesHorizontal_9_3.check_xScale(currVal_9_0_2,throwOnChange,false);
    const currVal_9_0_3:any = this.context.yScale;
    this._SeriesHorizontal_9_3.check_yScale(currVal_9_0_3,throwOnChange,false);
    const currVal_9_0_4:any = this.context.colors;
    this._SeriesHorizontal_9_3.check_colors(currVal_9_0_4,throwOnChange,false);
    const currVal_9_0_5:any = this.context.gradient;
    this._SeriesHorizontal_9_3.check_gradient(currVal_9_0_5,throwOnChange,false);
    if (this._SeriesHorizontal_9_3.ngDoCheck(this,this._el_9,throwOnChange)) { this.compView_9.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    const currVal_26:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_26 == null)? (null as any): currVal_26.toString()));
      this._expr_26 = currVal_26;
    }
    this.compView_1.detectChanges(throwOnChange);
    this.compView_9.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_9.destroy();
    this._SeriesHorizontal_9_3.ngOnDestroy();
    this._Chart_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_11,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_BarHorizontal1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_BarHorizontal2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_0:any = ((<any>this.context.legendLabelClick.emit($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'clickHandler')) {
      const pd_sub_0:any = ((<any>this.context.click($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_BarHorizontal1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import21.XAxis>;
  _XAxis_0_3:import22.Wrapper_XAxis;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_BarHorizontal1,renderType_BarHorizontal,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'xAxis',''),(null as any));
    this.compView_0 = new import22.View_XAxis0(this.viewUtils,this,0,this._el_0);
    this._XAxis_0_3 = new import22.Wrapper_XAxis();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._XAxis_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._XAxis_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.XAxis) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._XAxis_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.xScale;
    this._XAxis_0_3.check_xScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._XAxis_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.showGridLines;
    this._XAxis_0_3.check_showGridLines(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.showXAxisLabel;
    this._XAxis_0_3.check_showLabel(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.xAxisLabel;
    this._XAxis_0_3.check_labelText(currVal_0_0_4,throwOnChange,false);
    if (this._XAxis_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._XAxis_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateXAxisHeight($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_BarHorizontal2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import23.YAxis>;
  _YAxis_0_3:import24.Wrapper_YAxis;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_BarHorizontal2,renderType_BarHorizontal,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'yAxis',''),(null as any));
    this.compView_0 = new import24.View_YAxis0(this.viewUtils,this,0,this._el_0);
    this._YAxis_0_3 = new import24.Wrapper_YAxis();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._YAxis_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._YAxis_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.YAxis) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._YAxis_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.yScale;
    this._YAxis_0_3.check_yScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._YAxis_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.yAxisTickFormatting();
    this._YAxis_0_3.check_tickFormatting(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.showYAxisLabel;
    this._YAxis_0_3.check_showLabel(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.yAxisLabel;
    this._YAxis_0_3.check_labelText(currVal_0_0_4,throwOnChange,false);
    if (this._YAxis_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._YAxis_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateYAxisWidth($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}