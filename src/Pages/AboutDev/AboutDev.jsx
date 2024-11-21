import { useContext, useEffect } from "react";
import { AuthContext } from "../../Hooks/AuthContext";

const AboutDev = () => {
  const { setTitle } = useContext(AuthContext);
  useEffect(() => {
    setTitle("About Dev");
  }, [setTitle]);
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-4">
        About the Developer
      </h1>
      {/* Developer Introduction */}
      <h2 className="text-xl md:text-2xl font-light mb-4">
        Hi, I&rsquo;m{" "}
        <span className="font-semibold">Sushanto Chandra Sharkar</span>, the
        developer behind{" "}
        <span className="italic font-bold">&ldquo;Discount Pro.&rdquo;</span>
      </h2>

      {/* Purpose of the Project */}
      <h4 className="text-lg font-medium mb-2">Purpose of the Project:</h4>
      <ul className="list-disc ml-6 mb-6">
        <li>
          I built this app to make it easier for users in Bangladesh to save
          money through centralized coupon collection.
        </li>
      </ul>

      {/* Skills and Expertise */}
      <h4 className="text-lg font-medium mb-2">Skills and Expertise:</h4>
      <ul className="list-disc ml-6 mb-6">
        <li>Frontend Development: React, TailwindCSS, DaisyUI</li>
        <li>Backend and Database: Firebase Authentication</li>
        <li>Deployment: Netlify, Surge</li>
        <li>Tools: Git, VS Code</li>
      </ul>

      {/* Education and Experience */}
      <h4 className="text-lg font-medium mb-2">Education and Experience:</h4>
      <h5 className="text-md font-semibold mb-1">Education:</h5>
      <ul className="list-disc ml-6 mb-4">
        <li>Currently pursuing a BSc in Botany.</li>
        <li>Completed Higher Secondary Certificate (HSC) in 2023.</li>
      </ul>

      <h5 className="text-md font-semibold mb-1">Experience:</h5>
      <ul className="list-disc ml-6">
        <li>
          Although my academic background is in Botany, I have a strong passion
          for web development and have been exploring technologies like
          React.js, TailwindCSS, and Firebase.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold my-2">Get in Touch</h2>
      <p className="text-gray-700">Feel free to connect with me on:</p>
      <ul className="list-disc ml-6">
        <li>
          Email:{" "}
          <a href="mailto:Sushantochandrasharkar171@gamil.com" className="text-blue-500">
            Sushantochandrasharkar171@gamil.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sushanto-chandra-sharkar-144b95339/"
            className="text-blue-500" target="_blank"
          >
            https://www.linkedin.com/in/sushanto-chandra-sharkar-144b95339/
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/Sushanto171" target="_blank" className="text-blue-500">
          https://github.com/Sushanto171
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutDev;
