import React from "react";
import Image from "next/image";
import Styles from "./index.module.scss";
import DogImage from "./../../public/karaage.jpg";

const Profile = () => {
  return (
    <>
      <div className={Styles.profileTop}>
        <div className={Styles.left}>
          <Image
            src={DogImage}
            className={Styles.profileImage}
            width={400}
            height={400}
            alt="飼い犬の写真。"
          ></Image>
        </div>
        <div className={Styles.right}>
          <div className={Styles.rightWrapper}>
            <h2 className={Styles.name}>Noshian Kenichi(ノシアン 健一)</h2>
            <h3 className={Styles.subtitle}>
              Software Engineer and Graduate School Student(エンジニア,
              大学院生)
            </h3>
            <p className={Styles.message}>
              はじめまして！大学院生でエンジニアのノシアンと申します！
              現在は大学院生の傍ら、都内のベンチャー企業でエンジニアをしています。
              主にフロントエンド開発が得意で、バックエンド、インフラに関しても
              一通りできます！
              もしご興味を持っていただけましたら、ご連絡いただけると嬉しいです。
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.profileCenter}>
        <h2>学歴</h2>
        <ul>
          <li>2017年: 千葉県立白井高等学校 卒業</li>
          <li>2022年: 東京電機大学未来科学部情報メディア学科 卒業</li>
          <li>2022年: 東京電機大学院未来科学研究科情報メディア学専攻</li>
        </ul>
        <h2>資格</h2>
        <ul>
          <li>TOEIC: 775点</li>
        </ul>
      </div>
      <div className={Styles.profileBottom}>
        <h2 className={Styles.technics}>技術スタック(★: 得意)</h2>
        <ul className={Styles.technicStack}>
          <li>プログラミング言語: TypeScript★, Go★, Python★, PHP, Ruby</li>
          <li>
            フレームワーク: React★, Next.js★, Vue.js, Nuxt.js, Express, Gin,
            Django, Ruby on Rails
          </li>
          <li>
            クラウド: AWS(EC2, Auto Scaling, Lightsail, Lamda, ECR, ECS,
            Fargate, RDS, Cloud9, CICD(CodeBuild, CodeCommit, CodeDeploy,
            CodePipeline), Amplify, CloudFront, Route53, VPC, ELB, Cognito,
            Secret Manager, S3, etc… )
          </li>
          <li>
            その他: Github Actions, Docker, Nginx, Debian, Firebase, MySQL
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
