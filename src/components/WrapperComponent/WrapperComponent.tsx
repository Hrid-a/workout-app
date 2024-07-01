import * as React from "react";

function WrapperComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1697px] mx-auto  px-4 sm:px-6 md:px-8 2xl:px-0">
      {children}
    </div>
  );
}

export default WrapperComponent;
