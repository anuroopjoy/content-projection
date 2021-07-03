import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ProjectedComponent } from './projected/projected.component';
import { DummyDirective } from './dummy.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProjectedComponent,
    DummyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
