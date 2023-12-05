function ApiMixinFactory() {
  return {
    getApiMixin(httpClient) {
      return {
        async componentDidMount() {
          this.apiClient = httpClient;
          await this.search();
        },

        async componentDidUpdate(prevProps, prevState) {
          if (prevState && prevState.value !== this.state.value) {
            await this.search();
          }
        },

        async search() {
          try {
            const { value } = this.state;
            const res = await this.apiClient({
              url: `http://universities.hipolabs.com/search?country=${value}`,
              method: 'GET',
            });
            this.setTable(res);
          } catch (err) {
            console.error(err);
          }
        },

        handleSearchChange(event) {
          this.setState({
            value: event.target.value,
          });
        },

        getInitialState() {
          return {
            universities: [],
            value: 'Russian Federation',
          };
        },
      };
    },
  };
}

export default ApiMixinFactory;
