import React from "react";

const ActionComponent = () => {
  return (
    <div>
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Docs{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Find in-depth information about Next.js features and API.
      </p>
    </div>
  );
};

export default ActionComponent;
