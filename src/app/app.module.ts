import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationModule } from 'src/components/top-navigation/top-navigation.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TopNavigationModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
