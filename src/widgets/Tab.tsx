import React, { useState } from "react";

interface Tabs {
  title: React.ReactNode;
  children: React.ReactNode;
}

interface Props {
  tabs: Array<Tabs>;
}

const Tab = ({ tabs }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => setActiveIndex(index);
  const checkActive = (
    index: number,
    activeClass: string,
    deactiveClass: string
  ) => (activeIndex === index ? activeClass : deactiveClass);
  return (
    <div className="">
      <div className="tabs flex justify-center">
        {tabs.map((item, index) => (
          <button
            className={`tab  tab-lifted ${checkActive(
              index,
              " borderGradient border-[#35383C]  bg-[#35383C] text-white",
              " border-b-2 border-[#35383C] text-[#747474]"
            )} `}
            onClick={() => handleClick(index)}
            key={item.title?.toString()}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-20">{tabs[activeIndex]?.children}</div>
    </div>
  );
};

export default Tab;
