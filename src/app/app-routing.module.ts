import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { DealsOfTheDayComponent } from "./deals/deals-of-the-day.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AuctionDetailsComponent } from "./auction-details/auction-details.component";
import { AuctionWinnersComponent } from "./winners/auction-winners.component";
import { FrequentlyAskedQuestionsComponent } from "./faqs/frequently-asked-questions.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { TermsComponent } from "./terms/terms.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogSingleComponent } from "./blog-single/blog-single.component";
import { TemplateComponent } from "./layouts/template/template.component";
import { AddenchereComponent } from "./addenchere/addenchere.component";
import { EnchereComponent } from "./enchere/enchere.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  {
    path: "",
    component: TemplateComponent,

    children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "deals", component: DealsOfTheDayComponent },
      { path: "categories", component: CategoriesComponent },
      { path: "auction-details", component: AuctionDetailsComponent },
      { path: "winners", component: AuctionWinnersComponent },
      { path: "faqs", component: FrequentlyAskedQuestionsComponent },
      { path: "privacy", component: PrivacyComponent },
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent },
      { path: "enchres", component: EnchereComponent },
      { path: "terms", component: TermsComponent },
      { path: "blog", component: BlogComponent },
      { path: "addenchere", component: AddenchereComponent },
      { path: "blog-single", component: BlogSingleComponent },
    ],
  },

  { path: "notfound", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
