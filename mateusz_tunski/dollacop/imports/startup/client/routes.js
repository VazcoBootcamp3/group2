import App from "/imports/ui/containers/App"
import DebtsPage from "/imports/ui/pages/DebtsPage"
import ReceivablesPage from "/imports/ui/pages/ReceivablesPage"

export default {
  path: "/",
  component: App,
  indexRoute: { component: DebtsPage },
  childRoutes: [
    { path: "receivables", component: ReceivablesPage },
  ]
}
