import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handleClick(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    });
    this.props.onPageChange(pageNumber);
  }

  render() {
    const { currentPage } = this.state;
    const { itemsPerPage, totalItems } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => this.handleClick(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    );
  }
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default Pagination;
