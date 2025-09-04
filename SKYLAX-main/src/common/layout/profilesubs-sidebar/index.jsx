import React from "react";
import Reactangle from "../../../../public/assets/images/Rectangle.svg";
import Image from "next/image";
import Link from "next/link";

const ProfileSubscription = () => {
  return (
    <div>
      <Image src={Reactangle} alt="rectangle" />

      <ul className="absolute top-[15%] left-[14%]">
        <Link href="profile">
          <li className="uppercase text-[24px] leading-[100%] font_neue_montreal_regular pb-6">
            Profile Settings
          </li>
        </Link>
        <Link href="subscription">
          <li className="uppercase text-[24px] leading-[100%] font_neue_montreal_regular pb-6">
            Subscriptions
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ProfileSubscription;
