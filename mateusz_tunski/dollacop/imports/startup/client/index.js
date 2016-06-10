import "react-hot-loader/patch"
import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"

import Router from "./Router"

render(<AppContainer>{Router}</AppContainer>, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept("./Router", () => {
    const NextAppRoot = require("./Router").default

    render(<AppContainer>{NextAppRoot}</AppContainer>, document.querySelector("#app"))
  })
}
