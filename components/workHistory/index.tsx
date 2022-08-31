import React, { FC } from "react";
import WorkHistoryItem from "./workHistory";
import { WorkHistoryType } from "./type";

type Props = {
  workHistory: WorkHistoryType[];
  title: string;
};

const WorkHistory: FC<Props> = ({ workHistory, title }) => (
  <div id="work_history" className='="mx-auto bg-white dark:bg-black'>
    <div className="2xl:max-w-screen-xl max-w-sm xl:max-w-screen-lg lg:max-w-screen-md mx-auto pt-6 pb-10">
      <h1 className=" text-3xl lg:text-4xl 2xl:text-4xl  mb-10 font-bold dark:text-gray-200  ">
        {title}
      </h1>
      {workHistory.map((history) => (
        <WorkHistoryItem item={history} />
      ))}
    </div>
  </div>
);

export default WorkHistory;
