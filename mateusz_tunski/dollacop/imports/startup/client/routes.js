import { Meteor } from "meteor/meteor"

import App from "/imports/ui/containers/App"
import DebtsContainer from "/imports/ui/containers/DebtsContainer"
import DebtFormContainer from "/imports/ui/containers/DebtFormContainer"
import ReceivablesContainer from "/imports/ui/containers/ReceivablesContainer"

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

export default {
  path: "/",
  component: App,
  indexRoute: { onEnter: (_, replace) => replace("/debts") },
  childRoutes: [
    { path: "login", component: LoginPage },
    { path: "signup", component: SignupPage },
    {
      path: "debts", onEnter: authenticate,
      indexRoute: { component: DebtsContainer },
      childRoutes: [
        { path: "new", component: DebtFormContainer }
      ]
    },
    { path: "receivables", component: ReceivablesContainer, onEnter: authenticate },
  ]
}
