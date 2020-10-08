import React from "react";
import Head from "next/head";
import _ from "lodash";

import Header from "./Header";
import Footer from "./Footer";

export default function Body(props) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {_.get(props, "page.frontmatter.title", null) &&
            _.get(props, "page.frontmatter.title", null) + " - "}
          {_.get(props, "data.config.title", null)}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initialScale=1.0" />
        <meta name="google" content="notranslate" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i"
          rel="stylesheet"
        />
      </Head>
      <div
        id="page"
        className={"site palette-" + _.get(props, "data.config.palette", null)}
      >
        <Header {...props} />
        <main id="content" className="site-content">
          {props.children}
        </main>
        <Footer {...props} />
      </div>
    </React.Fragment>
  );
}
