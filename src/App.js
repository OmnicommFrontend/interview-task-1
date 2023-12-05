import React from 'react';
import createReactClass from 'create-react-class';
import $ from 'jquery';
import ApiMixinFactory from './mixins/apiMixin';
import tableMixin from './mixins/tableMixin';
import Pagination from './Pagination';

const apiMixin = ApiMixinFactory().getApiMixin($.ajax);
const App = createReactClass({
  mixins: [
    tableMixin,
    apiMixin,
  ],
  render() {
    const start = this.state.itemsPerPage * (this.state.activePage - 1);
    const end = start + this.state.itemsPerPage;
    const universities = this.state.universities.slice(start, end);

    return (<div>
      <label htmlFor="#search">Поиск</label>
      <br />
      <input id="search" onChange={this.handleSearchChange} type="string" value={this.state.value} />
      <div>
        {this.renderTable(universities)}
      </div>
      <Pagination itemsPerPage={10}
        totalItems={this.state.universities.length}
        onPageChange={(page) => this.handleClick(page)} />
      <div>{this.state.color}</div>
    </div>);
  },
});

export default App;
