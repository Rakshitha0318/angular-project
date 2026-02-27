import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';
import { MarkListComponent } from './mark-list/mark-list.component';
import { EditMarkComponent } from './edit-mark/edit-mark.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
   { path: 'product',canActivate:[authGuard] ,component: ProductComponent },
   { path: 'mark',canActivate:[authGuard] ,component:MarksComponent },
   { path: 'mark-list',canActivate:[authGuard] ,component:MarkListComponent },
   { path: 'login', component: LoginComponent },
{path:"marks/:markId",canActivate:[authGuard],component:EditMarkComponent},
    {path:"product-details/:id",canActivate:[authGuard],component:ProductDetailsComponent},
    {path:"**",redirectTo:""}
];
