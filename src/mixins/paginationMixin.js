var paginationMixin = {
    paginate: function () {
        return this.state.universities = this.state.totalItems / this.state.activPage
    },
    getActiveCurrentPage() {
        return typeof this.state.activePage === boolean ?
            this.state.totalItems =
                Math.ceil(Number(this.state.activePage
                        * this.state.itemsPerPage)
                    + (this.state.universities
                        - this.state.totalItems
                        * this.state.itemsPerPage * this.state.activePage)) :
            this.state.activePage

    }
}

export {paginationMixin}