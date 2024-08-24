import { useRouter } from "../../routes/hook";
import useStateMachine from "../StateMachine/hook";
import { isMobile } from "react-device-detect";
import { useMemo } from "react";
import routes from "../../routes";
import TransitionLoader from "./TransitionLoader";

export default function PageLoading() {
  const { loadedResource, onCompleteInTransition, onCompleteOutTransition } =
    useStateMachine();
  const { page } = useRouter();

  const currentRoute = useMemo(() => {
    return routes.find((route) => route.page === page.prevPage);
  }, [page]);

  if (!loadedResource) {
    return null;
  }

  if (isMobile) {
    if (currentRoute?.transition?.mobile?.single) {
      if (!page.inTransitionCompleted) {
        if (typeof currentRoute?.transition?.mobile?.single === "string") {
          return (
            <TransitionLoader
              src={currentRoute.transition.mobile.single}
              onCompleted={onCompleteInTransition}
            />
          );
        } else if (
          typeof currentRoute?.transition?.mobile?.single === "object"
        ) {
          return (
            <TransitionLoader
            src={
              currentRoute.transition.mobile.single?.[page.activePage] ||
              currentRoute.transition.mobile.single.default
            }
              onCompleted={onCompleteInTransition}
            />
          );
        }
      }
      return null;
    }

    if (!page.inTransitionCompleted) {
      if (typeof currentRoute?.transition?.mobile?.in === "string") {
        return (
          <TransitionLoader
            src={currentRoute.transition.mobile.in}
            onCompleted={onCompleteInTransition}
          />
        );
      } else if (typeof currentRoute?.transition?.mobile?.in === "object") {
        return (
          <TransitionLoader
          src={
            currentRoute.transition.mobile.in?.[page.activePage] ||
            currentRoute.transition.mobile.in.default
          }
            onCompleted={onCompleteInTransition}
          />
        );
      }
    } else if (!page.outTransitionCompleted) {
      if (typeof currentRoute?.transition?.mobile?.out === "string") {
        return (
          <TransitionLoader
            src={currentRoute.transition.mobile.out}
            onCompleted={onCompleteOutTransition}
          />
        );
      } else if (typeof currentRoute?.transition?.mobile?.out === "object") {
        return (
          <TransitionLoader
          src={
            currentRoute.transition.mobile.out?.[page.activePage] ||
            currentRoute.transition.mobile.out.default
          }
            onCompleted={onCompleteOutTransition}
          />
        );
      }
    }

    return null;
  }

  if (currentRoute?.transition?.desktop?.single) {
    if (!page.inTransitionCompleted) {
      if (typeof currentRoute?.transition?.desktop?.single === "string") {
        return (
          <TransitionLoader
            src={currentRoute.transition.desktop.single}
            onCompleted={onCompleteInTransition}
          />
        );
      } else if (
        typeof currentRoute?.transition?.desktop?.single === "object"
      ) {
        return (
          <TransitionLoader
            src={
              currentRoute.transition.desktop.single?.[page.activePage] ||
              currentRoute.transition.desktop.single.default
            }
            onCompleted={onCompleteInTransition}
          />
        );
      }
    }
    return null;
  }

  if (!page.inTransitionCompleted) {
    if (typeof currentRoute?.transition?.desktop?.in === "string") {
      return (
        <TransitionLoader
          src={currentRoute.transition.desktop.in}
          onCompleted={onCompleteInTransition}
        />
      );
    } else if (typeof currentRoute?.transition?.desktop?.in === "object") {
      return (
        <TransitionLoader
        src={
          currentRoute.transition.desktop.in?.[page.activePage] ||
          currentRoute.transition.desktop.in.default
        }
          onCompleted={onCompleteInTransition}
        />
      );
    }
    return null;
  } else if (!page.outTransitionCompleted) {
    if (typeof currentRoute?.transition?.desktop?.out === "string") {
      return (
        <TransitionLoader
          src={currentRoute.transition.desktop.out}
          onCompleted={onCompleteOutTransition}
        />
      );
    } else if (typeof currentRoute?.transition?.desktop?.out === "object") {
      return (
        <TransitionLoader
        src={
          currentRoute.transition.desktop.out?.[page.activePage] ||
          currentRoute.transition.desktop.out.default
        }
          onCompleted={onCompleteOutTransition}
        />
      );
    }

    return null;
  }
  return null;
}
