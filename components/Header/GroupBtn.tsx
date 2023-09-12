"use client";

import SocialBtn from "./SocialBtn";
import SwitchLocale from "./SwitchLocale";

const GroupBtn = () => {

  return (
    <div className="flex flex-row items-center w-[209px] gap-[]">
      <SwitchLocale />
      <SocialBtn />
    </div>
  )
}

export default GroupBtn
