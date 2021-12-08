// modules import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// component import
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TheBasicsComponent } from './the-basics/the-basics.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContantComponent } from './layout/contant/contant.component';
import { RecipesComponent } from './layout/contant/recipes/recipes.component';
import { RecipesDetailComponent } from './layout/contant/recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './layout/contant/recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './layout/contant/recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './layout/contant/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './layout/contant/shopping-list/shopping-item/shopping-item.component';
// angular material import
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TheBasicsComponent,
    HeaderComponent,
    FooterComponent,
    ContantComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
