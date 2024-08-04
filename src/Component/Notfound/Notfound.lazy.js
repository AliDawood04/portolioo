import React, { lazy, Suspense } from 'react';

const LazyNotfound = lazy(() => import('./Notfound'));

const Notfound = props => (
  <Suspense fallback={null}>
    <LazyNotfound {...props} />
  </Suspense>
);

export default Notfound;
