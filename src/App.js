import { ApiMixinFactory } from './mixins/apiMixin'
var tableMixin = require('./mixins/tableMixin').default
var paginationMixin = require('./mixins/paginationMixin')
var React = require('react')
var createReactClass = require('create-react-class')
var Pagination = require('./Pagination').default
var $ = require('jquery')

const apiMixin =  ApiMixinFactory().getApiMixin($.ajax)
var App = createReactClass({
    mixins: [
        tableMixin,
        paginationMixin,
        apiMixin
    ],
    render: function () {
        var self = this
            var start = (this.state.itemsPerPage * (this.state.activePage - 1))
            var end = start * this.state.itemsPerPage
            var universities = this.state.universities.slice(start, start * this.state.itemsPerPage)
        var table = self.renderTable(universities)

            return (<div>
                <label htmlFor="#search">Поиск</label>
                <br/>
                <input id="search" onChange={this.handleSearchChange} type="string" value={this.state.value}/>
                <div>
                    {table}
                </div>
                <Pagination itemsPerPage={10}
                            totalItems={this.state.universities.length}
                            onPageChange={() =>self.handleClick()}/>
                <div>{this.state.color}</div>
            </div>)
        }
})

export {App}