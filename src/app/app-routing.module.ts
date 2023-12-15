import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CtaComponent } from './cta/cta.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'',component:CtaComponent},
  {path:'',component:SocialmediaComponent},
  {path:'contactus',component:ContactformComponent},
  {path:'services',component:ServicesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'products',component:ProductsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
