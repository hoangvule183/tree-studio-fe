import routes from "../../routes";
import classNames from "classnames";
import { useRouter } from "../../routes/hook";
import PageLoading from "./PageTransition";
import React from "react";

const Router = React.memo(() => {
  const { showPage } = useRouter();

  return (
    <>
      {routes.map((route, index) => (
        <div
          key={index}
          className={classNames(
            "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen",
            {
              "translate-x-0 opacity-100 z-0": showPage === route.page,
              "translate-x-full opacity-0 z-[-100]": showPage !== route.page,
            }
          )}
        >
          {route.content}
        </div>
      ))}
      <PageLoading />
    </>
  );
});

export default Router;
