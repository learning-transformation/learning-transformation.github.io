import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './homepage.jpg';

const FirstLeftText = () => <p>教育を変革する</p>;

const FirstRightText = () => (
  <p>
    テクノロジーの急速な進化により、教育の未来は大きく変わりつつあります。私たちは、ITエンジニアが教育に関わることで創り出せる新たな学びの可能性を探求していきます。
    <a
      className={calloutLink}
      href="/about">
      Learning Transformation ワーキング・グループについて →
    </a>
  </p>
);

const SecondLeftText = () => <p>あなたも参加しましょう</p>;

const SecondRightText = () => (
  <p>
    Learning Transformation ワーキング・グループはオープンなコミュニティーです。
    私たちの活動に興味を持たれた方は、ぜひお気軽にご連絡ください。
    <a
      className={calloutLink}
      href="/about">
      問い合わせる →
    </a>
  </p>
);

const BannerText = () => <h1>Learning Transformation</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} position='top' />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
