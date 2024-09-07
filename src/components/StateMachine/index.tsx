import { createContext, useCallback, useEffect, useState } from "react";
import { IPage } from "../../types";
import { getPageFromUrl, setPageUrl } from "../../routes/utils";
import routes from "../../routes";
import { isMobile } from "react-device-detect";

export const StateMachineContext = createContext({
  page: {
    prevPage: IPage.HOME,
    activePage: IPage.HOME,
    inTransitionCompleted: false,
    outTransitionCompleted: false,
  },
  changePage: (page: IPage, projectId?: number) => {
    console.log(page, projectId);
  },
  onCompleteInTransition: () => {
    console.log("onCompleteInTransition");
  },
  onCompleteOutTransition: () => {
    console.log("onCompleteOutTransition");
  },
  loadedResource: true,
  setLoadedResource: (loading: boolean) => {
    console.log(loading);
  },
});

export default function StateMachineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadedResource, setLoadedResource] = useState(false);

  const [page, setPage] = useState({
    prevPage: getPageFromUrl(),
    activePage: getPageFromUrl(),
    inTransitionCompleted: true,
    outTransitionCompleted: true,
  });


  const changePageState = useCallback((newPage: IPage) => {
    const currentPage = routes.find((route) => route.page === page.activePage);
    if (!currentPage) {
      return;
    }

    if (isMobile) {
      if (currentPage.transition?.mobile?.single) {
        setPage((prev) => ({
          prevPage: prev.activePage,
          activePage: newPage,
          inTransitionCompleted: false,
          outTransitionCompleted: true
        }));
      } else if (currentPage.transition?.mobile?.in && currentPage.transition?.mobile?.out) {
        setPage((prev) => ({
          prevPage: prev.activePage,
          activePage: newPage,
          inTransitionCompleted: false,
          outTransitionCompleted: false
        }));
      } else {
        setPage((prev) => ({
          prevPage: prev.activePage,
          activePage: newPage,
          inTransitionCompleted: true,
          outTransitionCompleted: true
        }));
      }
    } else {
      if (currentPage.transition?.desktop?.single) {
        setPage((prev) => ({
          prevPage: prev.activePage,
          activePage: newPage,
          inTransitionCompleted: false,
          outTransitionCompleted: true
        }))
      } else if (currentPage.transition?.desktop?.in && currentPage.transition?.desktop?.out) {
        setPage((prev) => ({
          prevPage: prev.activePage,
          activePage: newPage,
          inTransitionCompleted: false,
          outTransitionCompleted: false
        }));
      } else {
        setPage((prev) => ({
          prevPage: prev.activePage,
          activePage: newPage,
          inTransitionCompleted: true,
          outTransitionCompleted: true
        }));
      }
    }
  }, [page.activePage])

  const changePage = useCallback((newPage: IPage, projectId?: number) => {
    changePageState(newPage);
    setPageUrl(newPage, projectId);
  }, [changePageState]);

  const onCompleteInTransition = useCallback(() => {
    setPage((prev) => ({
      ...prev,
      inTransitionCompleted: true,
    }));
  }, []);

  const onCompleteOutTransition = useCallback(() => {
    setPage((prev) => ({
      ...prev,
      outTransitionCompleted: true,
    }));
  }, []);

  useEffect(() => {
    const handleChangePage = () => {
      const page = getPageFromUrl();
      changePageState(page);
    }

    window.addEventListener('popstate', handleChangePage);

    return () => {
      window.removeEventListener('popstate', handleChangePage);
    }
  }, [changePageState])

  return (
    <StateMachineContext.Provider
      value={{
        page,
        changePage,
        onCompleteInTransition,
        onCompleteOutTransition,
        loadedResource,
        setLoadedResource,
      }}
    >
      {children}
    </StateMachineContext.Provider>
  );
}
