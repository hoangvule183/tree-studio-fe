import { useMemo } from "react";
import useStateMachine from "../components/StateMachine/hook";

export function useRouter() {
  const { changePage, page } =
    useStateMachine();

  const showPage = useMemo(() => {
    if (page.inTransitionCompleted) {
      return page.activePage;
    }
    return page.prevPage;
  }, [page]);


  return {
    changePage,
    page,
    showPage,
  };
}
