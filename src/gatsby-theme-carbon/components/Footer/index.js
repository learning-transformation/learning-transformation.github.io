import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Logo from './logo.svg';

const FooterLogo = () => (
  <img style={{fill: '#fff'}} src={Logo} alt="" />
);

const Content = ({ buildTime }) => (
  <>
    <p>
      <strong>Learning Transformation</strong> ワーキング・グループは2022年より活動を開始し、教育の未来を変革するために活動しています。
    </p>
    <p>
      教育が生徒に与える可能性は無限大です。私たちは、ITエンジニアが教育に関わることで創り出せる新たな学びの可能性を探求していきます。
    </p>
    <p>
      <a href="#">
        私たちの活動についてさらに詳しく →
      </a>
    </p>
    <p></p>
    <p>
      最終更新日: {buildTime}
    </p>
  </>
);

const links = {
  firstCol: [
    { href: '#', linkText: 'お問い合わせ' },
    { href: '#', linkText: '利用条件' },
  ],
  secondCol: [
    { href: '#', linkText: 'プライバシー' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={FooterLogo} />;

export default CustomFooter;
