import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Write in markdown",
    description: (
      <>
        Write your posts in the markdown format in your favorite editor. We
        support Github flavored markdown.
      </>
    ),
  },
  {
    title: "Version Control your blog",
    description: (
      <>
        Manage your content in a git repository. Make PR to preview changes to
        your blog. Push to deployment branch for changes to go live.
      </>
    ),
  },
  {
    title: "Custom Domain",
    description: (
      <>
        Fully managed custom domain for a small monthly fee. Try 30 days free.
      </>
    ),
  },
  {
    title: "Branding",
    description: (
      <>Make your blog personal by picking your theme color, logo, and more.</>
    ),
  },
  {
    title: "Collaborative publishing",
    description: (
      <>
        Use Github to collaborate on your posts using Pull Requests. Every PR
        publishes a preview of your blog.
      </>
    ),
  },
  {
    title: "Fully Managed",
    description: (
      <>
        No need to manage servers. Add one config file to your repository and
        your blog is live.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")} style={{ marginTop: 40 }}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
