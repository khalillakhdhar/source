import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AuctionDetailsComponent } from "./auction-details/auction-details.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { TermsComponent } from "./terms/terms.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { BlogSingleComponent } from "./blog-single/blog-single.component";
import { FrequentlyAskedQuestionsComponent } from "./faqs/frequently-asked-questions.component";
import { AuctionWinnersComponent } from "./winners/auction-winners.component";
import { DealsOfTheDayComponent } from "./deals/deals-of-the-day.component";
import { TemplateComponent } from "./layouts/template/template.component";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { EnchereComponent } from "./enchere/enchere.component";
import { AddenchereComponent } from "./addenchere/addenchere.component";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    DealsOfTheDayComponent,
    CategoriesComponent,
    AuctionDetailsComponent,
    AuctionWinnersComponent,
    FrequentlyAskedQuestionsComponent,
    PrivacyComponent,
    SigninComponent,
    SignupComponent,
    TermsComponent,
    NotfoundComponent,
    BlogSingleComponent,
    TemplateComponent,
    EnchereComponent,
    AddenchereComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
