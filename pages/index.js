import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Technical Support Assessment</h1>
      <p className="mb-4">Welcome to my assessment page for the Technical Customer Support role.</p>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Assessment Questions & Answers</h2>

        {/* Question Number 1 */}
        <p className="text-left">
          <strong>1. Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.</strong>
          <br />
          <br />
          For this assessment, I used Next.js as my framework because it provides an efficient way to build static websites while allowing room for future scalability. 
          <br />
          Since Netlify is a powerful platform for hosting and deploying static sites, I chose it for its seamless integration and automation features.
          <br />
          Tools & Choices:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Next.js</strong> → Enables fast, SEO-friendly static site generation.</li>
          <li><strong>GitHub</strong> → Used for version control and smooth integration with Netlify.</li>
          <li><strong>Netlify</strong> → Manages automatic deployment, CI/CD workflows, and free hosting.</li>
        </ul>
        <br />
        <p className="text-left">
          Challenge & Solution:
          <br />
          One issue I encountered was SSH authentication for GitHub, as I initially faced a &quot;Permission denied (publickey) error&quot;. To fix this, I generated a new SSH key, added it to my GitHub account, and successfully established a secure connection.
        </p>


        {/* Question Number 2 */}
        <p className="text-left">
          <strong>2. What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.</strong>
          <br />
          <br />
          I was impressed by how effortlessly Netlify deploys projects from GitHub and hosts web applications.
          <br />
          At the moment, I don’t see any areas for improvement, but here are the features that stood out to me:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li><strong>Seamless GitHub Integration</strong> → Automatic deployment from my GitHub repository made the process smooth.</li>
          <li><strong>CI/CD Workflow</strong> → Every push to GitHub triggers an automatic build and deployment.</li>
          <li><strong>User-Friendly Dashboard</strong> → Managing site settings, environment variables, and deployments is intuitive.</li>
        </ul>

        {/* Question Number 3 */}
        <p className="text-left">
          <strong>3. Rank your 5 favorite and 5 least favorite activities from this list:</strong>
          <a href="https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> View List</a>
        </p>

        <h3 className="text-lg font-semibold mt-4">📌 5 Favorite Activities</h3>
        <ol className="list-decimal list-inside ml-4 space-y-2">
          <li><strong>Debug a customer&apos;s build using a programming language and framework that you&apos;ve never seen before</strong> – I enjoy problem-solving and learning new technologies.</li>
          <li><strong>Develop a code example to share with a customer</strong> – I like creating solutions and helping others understand them.</li>
          <li><strong>Suggest and champion improvements to the Support team&apos;s workflow</strong> – I appreciate finding better ways to improve efficiency.</li>
          <li><strong>Work with a customer to figure out if Netlify&apos;s service can solve a particular workflow or integration challenge they have</strong> – I enjoy helping customers find solutions.</li>
          <li><strong>Submit bug reports and potentially bug fixes</strong> – I’m detail-oriented and enjoy identifying and resolving issues.</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6">🚫 5 Least Favorite Activities</h3>
        <ol className="list-decimal list-inside ml-4 space-y-2">
          <li><strong>Manage a Support team</strong> – I prefer technical work over management responsibilities.</li>
          <li><strong>Respond to Netlify customers on Twitter</strong> – Social media support isn’t my preferred way of communicating.</li>
          <li><strong>Help manage communications during a service outage</strong> – I’d prefer to focus on resolving the technical issue rather than handling communication.</li>
          <li><strong>Engage multiple users at once via chat to answer their questions and troubleshoot problems</strong> – I prefer focusing on one problem at a time for more thorough solutions.</li>
          <li><strong>Create video tutorials to help teach users a specific feature or use case</strong> – I’m more comfortable with written documentation and direct problem-solving.</li>
        </ol>


        {/* Question Number 4 */}
        <p className="text-left">
          <strong>4. Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</strong>
        </p>
        <h3 className="text-lg font-semibold mt-4">Documentation Link:
        <a href="https://www.zoho.com/crm/developer/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Zoho CRM API Documentation</a></h3>
        <p className="text-left">
          I find the Zoho CRM API documentation well-done because of its clear structure and practical examples:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Organized Sections</strong> → Each topic is structured logically with concise explanations.</li>
          <li><strong>Endpoint Examples</strong> → Provides actual endpoints along with sample requests (cURL or Deluge) and responses, making implementation easier.</li>
        </ul>

        {/* Question Number 5 */}
        <p className="text-left">
          <strong>5. Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.</strong>
          <br />
          <br />
          One major challenge for less-technical users is understanding DNS records (A, CNAME, MX, TXT, etc.). Many struggle to differentiate their functions—for instance, an A record maps a domain to an IP address, while a CNAME record creates an alias for another domain. Without this knowledge, users may configure DNS settings incorrectly, leading to issues like inaccessible websites or email failures.
          <br />
          Another common challenge is DNS propagation delays. When users update DNS settings, such as pointing their domain to Netlify, changes don’t take effect immediately. Since DNS updates must propagate across multiple global servers, it can take hours to fully reflect. This delay often confuses users who expect instant changes, leading to frustration when their site doesn’t update as expected.
        </p>


        {/* Question Number 6 */}
        <p className="text-left">
          <strong>6. A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.</strong>
        </p>
        <h3 className="text-lg font-semibold mt-4">Steps I Would Take:</h3>
        <ol className="list-decimal list-inside ml-4 space-y-2">
          <li><strong>Check Build Logs for Specific Errors</strong> – Since Exit Code 2 indicates a general failure, I would look for more details in Netlify’s build logs.</li>
          <li><strong>Verify Build Command </strong> – Ensure the correct command is set in Netlify’s settings (e.g., npm run build).</li>
          <li><strong>Check for Missing Dependencies</strong> – Confirm all required packages are installed by running npm install.</li>
          <li><strong>Confirm Node.js Version</strong> – Ensure the project is using a Node.js version compatible with Netlify’s environment.</li>
          <li><strong>Test Locally</strong> – Attempt to reproduce the issue by running npm run build locally.</li>
        </ol>
        <h3 className="text-lg font-semibold mt-4">Customer-Facing First Response:</h3>
        <p className="text-left">
          Subject: Troubleshooting Your Build Failure on Netlify
          <br />
          Hi [Customer&apos;s Name],
          <br />
          I see that your build failed with Exit Code 2, which can happen due to various reasons, such as missing dependencies or incorrect build commands. 
          <br />
          To help troubleshoot, could you check the following?
        </p>
          <ul className="list-disc list-inside ml-4">
            <li>The build command in your Netlify settings is set to npm run build.</li>
            <li>All dependencies are installed by running npm install.</li>
            <li>Your Node.js version matches Netlify’s environment.</li>
            <li>If possible, try running npm run build locally and share any errors you encounter.</li>
          </ul>
        <p className="text-left">
          Let me know what you find, and I’d be happy to assist further!
          <br />
          Best,
          <br />
          Jesryl
        </p>


        {/* Question Number 7 */}
        <p className="text-left">
          <strong>7. How would you set up an http 301 status redirect from &quot;/netlify/anything&quot; on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site. (Please add the proxy redirect to your website!)</strong>
        </p>
        <div className="bg-gray-900 text-white p-4 rounded-md text-left font-mono">
          <p className="text-green-400"># 301 Redirect (From /netlify/anything to Google Search)</p>
          <p className="text-gray-400"># Added this to the netlify.toml file:</p>
          <pre className="whitespace-pre-wrap">
            [[redirects]]
            from = &quot;/netlify/:query&quot;
            to = &quot;https://www.google.com/search?q=:query&quot;
            status = 301
            force = true
          </pre>
            <p className="mt-4 text-green-400"># Proxy Redirect (Directly on the Site)</p>
            <pre className="whitespace-pre-wrap">
            [[redirects]]
            from = &quot;/proxy/*&quot;
            to = &quot;https://jesryltechsupportassessment.netlify.app/:splat&quot;
            status = 200
            force = true
          </pre>
        </div>


        {/* Question Number 8 */}
        <p className="text-left">
          <strong>8. Please attempt to deploy a function on our service. This need not be complicated. It could be &quot;Hello World&quot;. Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.</strong>
        </p>
        <div className="bg-gray-900 text-white p-4 rounded-md text-left font-mono">
          <p className="text-green-400">1. Created a functions/hello-world.js file</p>
          <pre className="whitespace-pre-wrap">
            <code>
              {`exports.handler = async () => {
                return {
                  statusCode: 200,
                  body: JSON.stringify({ message: "Hello, Netlify Functions!" })
                };
              };`}
            </code>
          </pre>
          <p className="mt-4 text-green-400">2. Updated netlify.toml</p>
          <pre className="whitespace-pre-wrap">
            <code>
              {`[functions]
              directory = "functions"`}
            </code>
          </pre>
          <p className="text-green-400">3. Deployed the site – Netlify automatically detected and deployed the function.</p>
          <p className="text-green-400">Troubleshooting Notes:
          I initially encountered an issue where my function didn’t deploy correctly. After reviewing the logs, I discovered two problems:</p>
          <ul className="list-disc list-inside ml-4">
            <li>I had forgotten to enable Netlify Functions in the netlify.toml file.</li>
            <li>In index.js, I needed to replace &quot; with <code>{`&quot;`}</code> for proper encoding.</li>
          </ul>
        </div>

        {/* Question Number 9 */}
        <p className="text-left">
          <strong>9. We understand you don&apos;t know anything about our internal procedures at this stage, but we want you to explain at a high level how you&apos;d react to this situation: You receive a report of a severe security issue on www.netlify.com. You can&apos;t immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven&apos;t confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?</strong>
        </p>
        <p className="text-green-400"><strong>Approach to Handling a Severe Security Report</strong></p>
        <p className="text-green-400">If a customer reports a severe security vulnerability but I can’t immediately confirm it, I would take the following steps:</p>
        <p className="mt-4 text-green-400">1. Investigate & Gather Details</p>
        <ul className="list-disc list-inside ml-4">
          <li>Request specific steps to reproduce the issue.</li>
          <li>Review Netlify’s security policies and past reports for similar vulnerabilities.</li>
          <li>Attempt to replicate the issue in a controlled environment.</li>
        </ul>
        <p className="mt-4 text-green-400">2. Respond to the Reporter Professionally</p>
        <p className="mt-4 text-green-400">Subject: Acknowledgment of Your Security Report
          <br />
          Hi [Reporter’s Name],
          <br />
          Thank you for bringing this to our attention. Security is our top priority, and we take all reports seriously. While our team is actively investigating, we appreciate any additional details or proof-of-concept you can provide.
          <br />
          We will keep you updated as we assess the situation. Please rest assured that we are treating this with urgency.
          <br />
          Best regards,
          <br />
          Jesryl</p>
        <p className="mt-4 text-green-400">3. Escalate Internally If the Issue Seems Severe</p>
        <ul className="list-disc list-inside ml-4">
          <li>If the report appears valid, escalate it immediately to the security team.</li>
          <li>If necessary, temporarily disable affected features to mitigate risk.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
