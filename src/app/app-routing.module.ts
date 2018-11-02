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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
