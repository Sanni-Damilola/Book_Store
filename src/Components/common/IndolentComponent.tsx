import React from "react";
import { SyncLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";

const IndolentComponent: React.FC<{
  children: JSX.Element;
  timmer: number;
}> = ({ children, timmer }) => {
  const [loading, setLoading] = React.useState(false);
  const { ref, inView } = useInView();

  const loadData = React.useRef(loading);

  React.useEffect(() => {
    let timeid: ReturnType<typeof setTimeout> | null = null;

    if (inView) {
      timeid = setTimeout(() => {
        setLoading(true);
      }, timmer);
    }
    return () => {
      if (timeid) {
        clearTimeout(timeid);
      }
    };
  }, [inView]);

  React.useEffect(() => {
    if (loadData.current !== loading && loading) {
      loadData.current = true;
    }
  }, [loading]);
  return (
    <div ref={ref}>
      {loading ? (
        children
      ) : (
        <div className="flex justify-center items-center">
          <SyncLoader color="#f34344" />
        </div>
      )}
    </div>
  );
  /* This is an indolent component that doesn't do anything interesting */
};

export default IndolentComponent;
