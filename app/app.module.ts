import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { InlineEdit } from './inline-edit.component';
import { DraggableButton } from './button.component';
import { DraggablePanel } from './panel.component';
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, DraggableButton, InlineEdit, DraggablePanel ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
