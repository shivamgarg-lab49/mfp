import React from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);
  return <div ref={ref}></div>;
};
