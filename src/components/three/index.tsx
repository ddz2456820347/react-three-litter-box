import { useEffect, useRef } from "react";
import "./index.scss";
import { init } from "./InitThree";

export default function Three(): React.JSX.Element {
  const container = useRef(null);

  useEffect(() => {
    try {
      init(container.current as unknown as HTMLDivElement);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <div className="container" ref={container}></div>
    </>
  );
}
