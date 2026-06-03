import { Timeline, Button } from "flowbite-react";
import { useState } from "react";
import { FcCalendar } from "react-icons/fc";
import { HiArrowNarrowRight } from "react-icons/hi";

const Experience = () => {
  return (
    <div className="-my-8 divide-y-2 divide-greytext dark:divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-normal text-greytext dark:text-white">
            Diversio
          </span>
          <span className="mt-1 text-gray-400 dark:text-gray-500 text-sm">
            May 2022 - December 2022
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-semibold text-greytext dark:text-white title-font mb-2">
            Product Engineering Intern
          </h2>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Creating Diverse and Inclusive workplaces using Python (Django) &
            React
          </p>
          <a href="https://diversio.com/diversio-insights/">
            <button
              type="button"
              className="bg-red-100 text-redtext text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-redtext hover:scale-105"
            >
              Diversio Insights
            </button>
          </a>
        </div>
      </div>

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-normal text-greytext dark:text-white">
            Loblaw Companies Limited
          </span>
          <span className="mt-1 text-gray-400 dark:text-gray-500 text-sm">
            May 2021 - December 2021
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-semibold text-greytext dark:text-white title-font mb-2">
            Automation Developer Intern
          </h2>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Attended and provided updates in daily scrum meetings, specifically
            on a Power Automate flow which created and logged COVID-19 store
            operating hours for 1300+ Loblaw and Shoppers Drug Mart pharmacy
            locations, decreasing manual processes and increasing efficiency by
            98%
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Developed a Python cript that performed hourly checks on file
            system’s (AIX) storage limits and reported results back to the
            system administrator via email, creating ServiceNow tickets for
            escalation when necessary to ensure the system did not exceed the
            server threshold
          </p>
          <a href="https://www.federalrapidscreening.morewaystobenefit.ca/">
            <button
              type="button"
              className="bg-red-100 text-redtext text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-redtext  hover:scale-105"
            >
              Rapid Screening Program
            </button>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-normal text-greytext dark:text-white">
            Ryerson Rams Robotics (R3)
          </span>
          <span className="mt-1 text-gray-400 dark:text-gray-500 text-sm">
            May 2022 - December 2022
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-semibold text-greytext dark:text-white title-font mb-2">
            Software Controls Developer
          </h2>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Designed and programmed a hockey goalkeeping robot for TSN which can
            be used wirelessly (through wifi connection) to accurately and
            easily control the arms of a goalkeeper
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Responsible for programming a microcontroller (ESP8266) along with a
            series of motors and actuators to wirelessly control a robot over a
            Socket Server with TCP and HTTP communication
          </p>
          <a href="https://teamr3.ca/">
            <button
              type="button"
              className="bg-red-100 text-redtext text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-redtext  hover:scale-105"
            >
              R3 Site
            </button>
          </a>
        </div>
      </div>

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-normal text-greytext dark:text-white">
            Freelance
          </span>
          <span className="mt-1 text-gray-400 dark:text-gray-500 text-sm">
            May 2022 - December 2022
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-semibold text-greytext dark:text-white title-font mb-2">
            Software Developer
          </h2>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Created Python Scripts using social media API’s in order to handle
            social media account activity such as posting to pages and viewing
            analytics
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Automated social media posting, decreasing overall manual time spent
            by 90% (from 1 hour to 5 minutes) and successfully gaining 100k
            interactions per month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
