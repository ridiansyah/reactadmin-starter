import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./utility/context/Layout";

// Route-based code splitting

const login = lazy(() => import("./views/login/Index"));
const authorized = lazy(() => import("./views/common/NotAuthorized"));
const error404 = lazy(() => import("./views/common/error/404"));
const error500 = lazy(() => import("./views/common/error/500"));
const Home = lazy(() => import("./views/home/Home"));
const Page2 = lazy(() => import("./views/Page2"));

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/" component={Home} />
          <AppRoute path="/error/500" component={error500} fullLayout />
          <AppRoute path="/error/404" component={error404} fullLayout />
          <AppRoute path="/not-authorized" component={authorized} fullLayout />
          <AppRoute path="/page2" component={Page2} />
          <AppRoute path="/login" component={login} fullLayout />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
