import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Technical Support Assessment</h1>
      <p className="mb-4">Welcome to my assessment page for the Technical Customer Support role.</p>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Assessment Questions & Answers</h2>
        <p className="text-left">
          <strong>1. Talk about how you made your site...</strong>
          <br />
          (Your answer here)
        </p>
        <p className="text-left">
          <strong>2. What did you think of our service...</strong>
          <br />
          (Your answer here)
        </p>
        <p className="text-left">
          <strong>3. Rank your favorite and least favorite activities...</strong>
          <br />
          (Your answer here)
        </p>
        <p className="text-left">
          <strong>4. Provide a link to documentation...</strong>
          <br />
          (Your answer here)
        </p>
        <p className="text-left">
          <strong>5. Explain DNS configuration challenges...</strong>
          <br />
          (Your answer here)
        </p>
      </section>
    </div>
  );
};

export default Home;
