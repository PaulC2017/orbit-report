import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { OrbitListComponent } from './orbit-list.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
