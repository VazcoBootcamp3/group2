import App from "/imports/ui/containers/App"
import DebtsContainer from "/imports/ui/containers/DebtsContainer"
import ReceivablesContainer from "/imports/ui/containers/ReceivablesContainer"

import DebtsPage from "/imports/ui/pages/DebtsPage"
import DebtForm from "/imports/ui/components/DebtForm"

export default {
  path: "/",
  component: App,
  indexRoute: { onEnter: (_, replace) => replace("/debts") },
  childRoutes: [
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
