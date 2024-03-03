import React from "react";

const MainPage = ({ place, temple, vacation }) => {
  return (
    <div className="bg-white rounded p-10 shadow">
      <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 bg-blue-200 p-5 rounded">
        <div class="flex flex-col pb-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Favorite Place
          </dt>
          <dd class="text-lg font-semibold">{place}</dd>
        </div>
        <div class="flex flex-col py-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Favorite Temple
          </dt>
          <dd class="text-lg font-semibold">{temple}</dd>
        </div>
        <div class="flex flex-col pt-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Vacation Spot
          </dt>
          <dd class="text-lg font-semibold">{vacation}</dd>
        </div>
      </dl>
    </div>
  );
};

export default MainPage;
