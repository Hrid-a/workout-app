import * as React from "react";
import Icon from "../Icon";

function Features({ feats }: { feats: string[] }) {
  return (
    <div className="bg-white p-7  rounded-lg">
      {feats.map((item, idx) => {
        return (
          <div
            key={idx}
            className=" text-primary text-sm flex gap-4 items-center font-semibold md:text-xl mb-10 capitalize"
          >
            <span className="block p-[2px] bg-[#50ED42] w-fit rounded-full">
              <Icon
                name="check"
                className="text-white text-xl   w-[28px] h-[28px]"
              />
            </span>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Features;
