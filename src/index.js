const React = require('react')
const ReactDOM = require('react-dom')
const ReactApp = require('./app.js').App

const el = document.getElementById("root")
ReactDOM.render(<ReactApp/>, el)