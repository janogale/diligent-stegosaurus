import React from "react";
import _ from "lodash";

import { Link, withPrefix, htmlToReact } from "../utils";
import ActionLink from "./ActionLink";
import SubscribeForm from "./SubscribeForm";

function Footer(props) {
  return (
    <footer id="colophon" className="site-footer">
      <div className="footer-top outer">
        <div className="inner">
          <div className="footer-widgets">
            <div className="widget footer-branding">
              {_.get(props, "data.config.footer.logo_img", null) ? (
                <p className="site-logo">
                  <Link href={withPrefix("/")}>
                    <img
                      src={withPrefix(
                        _.get(props, "data.config.footer.logo_img", null)
                      )}
                      alt="Logo"
                    />
                  </Link>
                </p>
              ) : (
                <p className="site-title">
                  <Link href={withPrefix("/")}>
                    {_.get(props, "data.config.header.title", null)}
                  </Link>
                </p>
              )}
              {_.get(props, "data.config.footer.tagline", null) && (
                <p className="site-description">
                  {_.get(props, "data.config.footer.tagline", null)}
                </p>
              )}
            </div>
            {((_.get(props, "data.config.footer.has_nav", null) &&
              _.get(props, "data.config.footer.nav_links", null)) ||
              (_.get(props, "data.config.footer.has_social", null) &&
                _.get(props, "data.config.footer.social_links", null))) && (
              <nav className="widget footer-navigation">
                <div className="footer-nav-inside">
                  {_.get(props, "data.config.footer.nav_links", null) &&
                    _.get(props, "data.config.footer.has_nav", null) && (
                      <div className="secondary-nav">
                        <h2 className="widget-title">
                          {_.get(props, "data.config.footer.nav_title", null)}
                        </h2>
                        <ul className="secondary-menu">
                          {_.map(
                            _.get(props, "data.config.footer.nav_links", null),
                            (action, action_idx) => (
                              <li key={action_idx}>
                                <ActionLink {...props} action={action} />
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  {_.get(props, "data.config.footer.has_social", null) && (
                    <div className="social-nav">
                      <h2 className="widget-title">
                        {_.get(props, "data.config.footer.social_title", null)}
                      </h2>
                      <ul className="social-links">
                        {_.map(
                          _.get(props, "data.config.footer.social_links", null),
                          (action, action_idx) => (
                            <li key={action_idx}>
                              <ActionLink {...props} action={action} />
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </nav>
            )}
            {_.get(props, "data.config.footer.has_subscribe", null) && (
              <div className="widget footer-subscribe">
                <h2 className="widget-title">
                  {_.get(props, "data.config.footer.subscribe_title", null)}
                </h2>
                {_.get(props, "data.config.footer.subscribe_content", null) && (
                  <p>
                    {htmlToReact(
                      _.get(props, "data.config.footer.subscribe_content", null)
                    )}
                  </p>
                )}
                <SubscribeForm {...props} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="site-info outer">
        <div className="inner">
          {htmlToReact(_.get(props, "data.config.footer.content", null))}
          &nbsp;
          {_.map(
            _.get(props, "data.config.footer.links", null),
            (action, action_idx) => (
              <ActionLink key={action_idx} {...props} action={action} />
            )
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
