import { BrowserModule } from '@angular/platform-browser';
import {
  BsDropdownModule,
  TabsModule,
  DatepickerModule,
  BsDatepickerModule,
  PaginationModule,
  ButtonsModule,
} from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { NgxGalleryModule } from 'ngx-gallery';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ListsResolver } from './_resolvers/list.resolver';
import { MessagesResolver } from './_resolvers/message.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

export function getAccessToken(): string {
  return localStorage.getItem('token');
}

export const jwtConfig = {
  tokenGetter: getAccessToken,
  whiteListedDomains: ['localhost:5000'],
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberListComponent,
    MemberMessagesComponent,
    ListsComponent,
    MessagesComponent,
    PhotoEditorComponent,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxGalleryModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: jwtConfig,
    }),
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertifyService,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges,
    ListsResolver,
    MessagesResolver,
    ErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
