import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './shop.styles.scss';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectCollectionFetching, selectCollectionLoaded } from '../../redux/shop/shop.selectors'

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className='shop-page'>              
        <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)} />
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionLoaded: selectCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);