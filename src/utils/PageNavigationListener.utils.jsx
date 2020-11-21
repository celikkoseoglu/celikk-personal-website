import { useEffect } from "react";
import { withRouter } from "react-router-dom";

/**
 * @return {null}
 */
function PageNavigationListener({ history }) {
  useEffect(() => {
    // history.listen() returns a function that can be called used to stop the listener
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(PageNavigationListener);
