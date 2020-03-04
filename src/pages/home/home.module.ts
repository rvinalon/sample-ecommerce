import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardModule } from 'src/components/item-card/item-card.module';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}
]

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		ItemCardModule,
		RouterModule.forChild(routes)
	]
})
export class HomeModule { }
