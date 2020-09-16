import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { IgMainComponent } from './ig-main/ig-main.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProfileComponent } from './profile/profile.component';
import { ValueSetComponent } from './value-set/value-set.component';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {CovalentJsonFormatterModule} from '@covalent/core/json-formatter';
import {CovalentFlavoredMarkdownModule} from '@covalent/flavored-markdown';
import {CovalentSidesheetModule} from '@covalent/core/sidesheet';
import { MessageDefinitionComponent } from './message-definition/message-definition.component';
import {CovalentMessageModule} from "@covalent/core/message";
import {MatExpansionModule} from "@angular/material/expansion";
import { CodeSystemComponent } from './code-system/code-system.component';


@NgModule({
  declarations: [
    AppComponent,
    IgMainComponent,
    HomeComponent,
    ProfileComponent,
    ValueSetComponent,
    MessageDefinitionComponent,
    CodeSystemComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CovalentLayoutModule,
        CovalentStepsModule,
        // (optional) Additional Covalent Modules imports
        CovalentHttpModule.forRoot(),
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentFlavoredMarkdownModule,
        CovalentDynamicFormsModule,
        CovalentSidesheetModule,
        CovalentMessageModule,

        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatRadioModule,
        MatSelectModule,
        MatChipsModule,
        MatSortModule,
        MatToolbarModule,
        MatDialogModule,
        CovalentJsonFormatterModule,
        MatExpansionModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
