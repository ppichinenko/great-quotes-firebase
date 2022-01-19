import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote.js"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes.js"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail.js"));
const Layout = React.lazy(() => import("./components/layout/Layout.js"));
const NotFound = React.lazy(() => import("./pages/NotFound.js"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
