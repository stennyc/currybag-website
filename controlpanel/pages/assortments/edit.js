import React from 'react';
import { withRouter } from 'next/router';
import { Grid, Container, Header } from 'semantic-ui-react';
import App from '../../components/App';
import connectApollo from '../../lib/connectApollo';
import AssortmentHeader from '../../components/assortments/AssortmentHeader';
import AssortmentMenu from '../../components/assortments/AssortmentMenu';
import FormEditAssortmentTexts from '../../components/products/FormEditAssortmentTexts';

export default connectApollo(withRouter(({ changeTab, router, ...rest }) => (
  <App {...rest}>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column stretched>
            <AssortmentHeader assortmentId={router.query._id} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <AssortmentMenu router={router} assortmentId={router.query._id} />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            {(!router.query.tab || router.query.tab === 'AssortmentTranslation') && (
              <div>
                <Header as="h3">General Texts</Header>
                <FormEditAssortmentTexts assortmentId={router.query._id} />
              </div>
            )}
            {router.query.tab === 'AssortmentLinks' && (
              <div>
                <Header as="h3">Sortimente</Header>
                {/* <AssortmentMediaList assortmentId={router.query._id} /> */}
              </div>
            )}
            {router.query.tab === 'AssortmentAssortments' && (
              <div>
                <Header as="h3">Zugewiesene Produkte</Header>
                {/* <FormEditAssortmentCommerce assortmentId={router.query._id} /> */}
              </div>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </App>
)));
