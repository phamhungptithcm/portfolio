import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./main/home/home.component";
import { AboutComponent } from "./main/about/about.component";
import { ExperienceComponent } from "./main/experience/experience.component";
import { ServicesComponent } from "./main/services/services.component";
import { WorkComponent } from "./main/work/work.component";
import { ContactComponent } from "./main/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ServicesComponent,
    WorkComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
