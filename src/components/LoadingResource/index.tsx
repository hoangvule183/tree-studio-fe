import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import useStateMachine from "../StateMachine/hook";

export default function LoadingResource() {
  const [fakePercentage, setFakePercentage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { loadedResource, setLoadedResource } = useStateMachine()
  const loadedResourceDebounce = useDebounce(loadedResource, 100);

  useEffect(() => {
    const listener = () => {
      setLoaded(true);
    };
    window.addEventListener("load", listener);
    return () => {
      window.removeEventListener("load", listener);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFakePercentage(100)
    }, 15000)
  }, [])

  const done = useMemo(() => {
    return fakePercentage === 100
  }, [fakePercentage])

  useEffect(() => {
    if (done) {
      setTimeout(() => {
        setLoadedResource(true)
      }, 300);
    }
  }, [done, setLoadedResource])

  useEffect(() => {
    if (!done) {
      const interval = setInterval(() => {
        if (loaded) {
          setFakePercentage((prev) => {
            if (prev < 95) {
              return 95;
            }
            return prev + 2.1 > 100 ? 100 : prev + 2.1;
          })
        } else {
          const random = Math.random() * 5;
          setFakePercentage((prev) => {
            if (prev > 90) {
              return 90;
            }
            const next = prev + random;
            return next > 100 ? 100 : prev;
          });
        }
      }, 300);
      return () => {
        clearInterval(interval);
      }
    }
  }, [loaded, done]);

  if (loadedResourceDebounce) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] w-screen h-screen bg-gray-50 flex items-center justify-center">
      Loading... ({Number(fakePercentage).toFixed(2)}%)
    </div>
  );
}
