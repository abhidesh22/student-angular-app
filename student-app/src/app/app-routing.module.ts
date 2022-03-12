import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadStrategyService } from './custom-preload-strategy.service';
import { PathResolveService } from './path-resolve.service';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    data: {
      preload: true,
    },
    loadChildren: () => import("./home-page/home-page.module").then((m) => m.HomePageModule)
  },
  {
    path: "aboutpage",
    data: {
      preload: false,
    },
    loadChildren: () => import("./about-page/about-page.module").then((m) => m.AboutPageModule)
  },
  {
    path: "login",
    data: {
      preload: false,
    },
    loadChildren: () =>
      import("./login-page/login-page.module").then((m) => m.LoginPageModule),
  },
  {
    path: "studentinfo",
    data: {
      preload: false,
    },
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import("./student-info/student-info.module").then((m) => m.StudentInfoModule),
  },
  {
    path: "universityinfo",
    canActivate:[AuthGuardService],
    data: {
      preload: false,
    },
    loadChildren: () => import("./university-info/university-info.module").then((m) => m.UniversityInfoModule),
  },
  {
    path: "**",
    resolve: {
      path: PathResolveService
    },
    loadChildren: () =>
      import("./notfound/notfound.module").then(
        (m) => m.NotfoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
