import { Meteor } from "meteor/meteor"

import App from "/imports/ui/containers/App"
import DebtsContainer from "/imports/ui/containers/DebtsContainer"
import ReceivablesContainer from "/imports/ui/containers/ReceivablesContainer"

import DebtsPage from "/imports/ui/pages/DebtsPage"
import DebtForm from "/imports/ui/components/DebtForm"

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
      path: "debts", component: DebtsContainer, onEnter: authenticate,
      indexRoute: { component: DebtsPage },
      childRoutes: [
        { path: "new", component: DebtForm }
      ]
    },
    { path: "receivables", component: ReceivablesContainer, onEnter: authenticate },
  ]
}
