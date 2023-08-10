var React = require('react')

var tableMixin = {
    setTable(res) {
      this.setState({universities: res, totalItems: res.length, itemsPerPage: 10, activePage: 1})
    },
    handleClick(page) {
      this.setState({
          activePage: page
      })
    },
    renderTable(rows = []) {
        if (!this.state.universities.length) {
            return null
        }
        return <table>
            <tr>
                <th>
                    University name
                </th>
                <th>
                  Country code
                </th>
                <th>
                    Domains
                </th>
            </tr>
            {rows.map(u =><tr>
                <td>{u.name}</td>
                    <td>{u.alpha_two_code}</td>
                <td>{u.domains.map(d => <a href={`https://${d}`} target="_blank"> {d} </a>)}</td>
                <td>{}</td>
            </tr>
            )}
        </table>
    }
}

export default tableMixin