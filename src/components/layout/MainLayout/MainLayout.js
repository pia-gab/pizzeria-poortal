import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <PageNav />
        {children}
      </div>
    );
  }
}

export default MainLayout;
