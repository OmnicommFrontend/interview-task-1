
function ApiMixinFactory() {
    if (new.target === undefined) {
        return undefined;
    }
}

ApiMixinFactory.prototype.getApiMixin = function (httpClient) {
    return {
        getInitialState: function () {
            return {
                universities: [],
                value: 'Russian Federation'
            }
        },
        componentWillMount: function () {
            this.apiClient = httpClient
            this.search()
        },

        componentDidUpdate: function (prevProps, prevState) {
            if (prevState.value !== this.state.value) {
                this.search()
            }
        },
        search() {
            const value = this.state.value
            this.apiClient({
                url: "http://universities.hipolabs.com/search?country=${value}",
                method: 'GET'
            }).done(res => this.setTable(res)).catch(err => console.error(err))
        },

        handleSearchChange(value) {
            this.setState({
                value: value.target.value
            })
        }
    }
}


module.exports =  ApiMixinFactory