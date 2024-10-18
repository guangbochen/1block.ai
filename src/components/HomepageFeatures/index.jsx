import React from "react";
import Slider from "react-slick";
import { CodeBlock } from 'react-code-blocks';
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";
import './feature.scss';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    id: 0,
    title: <Translate id="home.features.install.title">Easy to Install</Translate>,
    classVal: "col col--12 hero shadow--lw",
    description: (
      <>
        {translate({
          id: "home.feature.install.description",
          message: "Works out of the box on both x86_64 and ARM64 architectures for a smooth installation experience.",
        })}
      </>
    ),
  code:
        `## To bootstrap a new cluster
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken

## To monitor installation logs, run 
journalctl -u llmos -f

## (Optional) Add a worker node to the cluster
curl -sfL https://get-llmos.1block.ai | LLMOS_SERVER=https://server-url:6443 LLMOS_TOKEN=mytoken sh -s -
`,
  },
  {
    id: 1,
    title: <Translate id="home.feature.management.title">Infrastructure, LLM & Application Lifecycle Management</Translate>,
    classVal: "col col--12 hero hero--dark",
    description: (
      <>
        {translate({
          id: "home.feature.management.description",
          message: "Offers a unified interface that makes it easy for both developers and non-developers to manage infrastructure, ML clusters, models, and user workloads.",
        })}
      </>
    ),
    carousel: {
      items: [
        {
          file: '/img/llmos/home-page.png',
        },
        {
          file: '/img/llmos/ml-cluster.png',
        },
        {
          file: '/img/llmos/model-service.png',
        },
        {
          file: '/img/llmos/notebook.png',
        }
      ]
    }
  },
  {
    id: 2,
    title: <Translate id="home.feature.agnostic.title">'Cloud-Agnostic & ML Framework-Agnostic'</Translate>,
    classVal: "col col--12 hero shadow--lw",
    Svg: require('@site/static/img/multi-cloud.svg').default,
    description: (
      <>
        {translate({
          id: "home.feature.agnostic.description",
          message: "Works seamlessly across public clouds and on-premise servers. Compatible with any machine learning framework.",
        })}
      </>
    ),
  },
  {
    id: 3,
    title: <Translate id="home.feature.private.title">'Private, and Ideal for Edge & Branch'</Translate>,
    classVal: "col col--12 hero hero--primary",
    Svg: require('@site/static/img/feature_branch.svg').default,
    description: (
      <>
        {translate({
          id: "home.feature.private.description",
          message: "Supports private deployments with optimized resources for running models and workloads in edge and branch networks. It also allows for horizontal scaling to meet future business needs.",
        })}
      </>
    ),
  },
];

function Feature({title, description, code, carousel, Svg, Img, classVal, id}) {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="margin-vert--md">
      <div className={classVal}>
        <div className="row">
          <div className="col col--4">
            <h2 className="hero__title feature-title">{title}</h2>
            <p className="hero__subtitle feature-lead">{description}</p>
          </div>

          <div className="feature-img-wrapper col col--8">
            {code &&
              <CodeBlock
                text={code}
                language="shell"
                showLineNumbers={false}
                theme="docuras"
              />
            }

            {carousel &&
              <div className="carousel-wrapper">
                <Slider {...slickSettings}>
                    {carousel.items.map((item, idx) => (
                      <div key={idx} className="slider">
                        <img src={useBaseUrl(item.file)} alt={`Slide Img ${idx + 1}`}
                             className="d-block w-100 img-fluid"/>
                      </div>
                    ))}
                </Slider>
              </div>
            }

            {Svg &&
              <Svg className="feature-img" role="img"/>
            }

            {Img &&
              <img src={Img} className="feature-img" role="img" id={Img}/>
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="features-wrapper text-center">
      <div className="container container-lg">
        <h1 className="text--center margin-vert--md">
          <Translate id="home.features.title">
          A Full Private Platform. Not Just GPUs
          </Translate>
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
