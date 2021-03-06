import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAgentsComponent } from './view-agents/view-agents.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { ViewRegulatorsComponent } from './view-regulators/view-regulators.component';
import { CreateRegulatorComponent } from './create-regulator/create-regulator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateCondenserDeclarationComponent } from './create-condenser-declaration/create-condenser-declaration.component';
import { ViewCondenserDeclarationsComponent } from './view-condenser-declarations/view-condenser-declarations.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeAgenteComponent } from './home-agente/home-agente.component';
import { HomeRegulatorComponent } from './home-regulator/home-regulator.component';
import { ViewReactorDeclarationsComponent } from './view-reactor-declarations/view-reactor-declarations.component';
import { CreateReactorDeclarationComponent } from './create-reactor-declaration/create-reactor-declaration.component';
import { CreateSvcDeclarationComponent } from './create-svc-declaration/create-svc-declaration.component';
import { ViewSvcDeclarationsComponent } from './view-svc-declarations/view-svc-declarations.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home-admin',
    component: HomeAdminComponent
  },
  {
    path: 'home-agente',
    component: HomeAgenteComponent
  },
  {
    path: 'home-regulator',
    component: HomeRegulatorComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-agents',
    component: ViewAgentsComponent
  },
  {
    path: 'create-agent',
    component: CreateAgentComponent
  },
  {
    path: 'view-regulators',
    component: ViewRegulatorsComponent
  },
  {
    path: 'create-regulator',
    component: CreateRegulatorComponent
  },
  {
    path: 'create-condenser-declaration',
    component: CreateCondenserDeclarationComponent
  },
  {
    path: 'view-condenser-declarations',
    component: ViewCondenserDeclarationsComponent
  },
  {
    path: 'CreateReactor',
    component: CreateReactorDeclarationComponent
  },
  {
    path: 'ViewReactor',
    component: ViewReactorDeclarationsComponent
  },
  {
    path: 'CreateSvc',
    component: CreateSvcDeclarationComponent
  },
  {
    path: 'ViewSvc',
    component: ViewSvcDeclarationsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
