import App from "/imports/ui/containers/App"
import DebtsContainer from "/imports/ui/containers/DebtsContainer"
import ReceivablesContainer from "/imports/ui/containers/ReceivablesContainer"

import DebtsPage from "/imports/ui/pages/DebtsPage"
import DebtForm from "/imports/ui/components/DebtForm"

import LoginPage from "/imports/ui/pages/LoginPage"
import SignupPage from "/imports/ui/pages/SignupPage"


export default {
  path: "/",
  component: App,
  indexRoute: { onEnter: (_, replace) => replace("/debts") },
  childRoutes: [
    { path: "login", component: LoginPage },
    { path: "signup", component: SignupPage },
    {
      path: "debts", component: DebtsContainer,
      indexRoute: { component: DebtsPage },
      childRoutes: [
        { path: "new", component: DebtForm }
      ]
    },
    { path: "receivables", component: ReceivablesContainer },
  ]
}
