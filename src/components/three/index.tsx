import { useEffect, useRef } from "react";
import "./three.scss";
import { init } from "./InitThree";

export default function Three(): React.JSX.Element {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initContainer = async () => {
      try {
        await init(container.current as HTMLDivElement);
      } catch (err) {
        console.log(err);
      }
    };

    initContainer();
  }, []);

  return <div className="container" ref={container} />;
}
