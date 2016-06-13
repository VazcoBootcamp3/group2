import { Meteor } from "meteor/meteor"

import App from "/imports/ui/containers/App"
import DebtsContainer from "/imports/ui/containers/DebtsContainer"
import DebtFormContainer from "/imports/ui/containers/DebtFormContainer"
import ReceivablesContainer from "/imports/ui/containers/ReceivablesContainer"
import GroupsContainer from "/imports/ui/containers/GroupsContainer"
import GroupFormContainer from "/imports/ui/containers/GroupFormContainer"

import LandingPage from "/imports/ui/pages/LandingPage"
import LoginPage from "/imports/ui/pages/LoginPage"
import SignupPage from "/imports/ui/pages/SignupPage"

const authenticate = (nextState, replace) => {
  if (!Meteor.userId()) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const indexRedirect = (_, replace) => {
  if (Meteor.userId()) {
    replace("/debts")
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: {
    component: LandingPage,
    onEnter: indexRedirect
  },
  childRoutes: [
    {
      path: "login",
      component: LoginPage
    },
    {
      path: "signup",
      component: SignupPage
    },
    {
      path: "debts",
      indexRoute: { component: DebtsContainer },
      childRoutes: [{
        path: "new", component: DebtFormContainer
      }],
      onEnter: authenticate
    },
    {
      path: "receivables",
      component: ReceivablesContainer,
      onEnter: authenticate
    },
    {
      path: "groups",
      indexRoute: { component: GroupsContainer },
      childRoutes: [{
        path: "new", component: GroupFormContainer
      }],
      onEnter: authenticate
    }
  ]
}
