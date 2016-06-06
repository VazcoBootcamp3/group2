import App from "/imports/ui/containers/App"
import DebtsContainer from "/imports/ui/containers/DebtsContainer"
import ReceivablesContainer from "/imports/ui/containers/ReceivablesContainer"

export default {
  path: "/",
  component: App,
  indexRoute: { component: DebtsContainer },
  childRoutes: [
    { path: "receivables", component: ReceivablesContainer },
  ]
}
