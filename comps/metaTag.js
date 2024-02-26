import Head from "next/head";

function MetaTags(props) {
  const { propTitle, propDescription, propImage, propKeywords } = props;
  const title =
    propTitle || `Hariom Motor Driving School`;
  const description =
    propDescription ||
    "Discover Hariom Motor Driving School, where expert instructors guide you through comprehensive driving lessons with a focus on safety and confidence-building. Whether you're a beginner or seeking to refine your skills, our tailored courses prepare you for success on the road and during license tests. Join us to embark on a journey towards skilled, responsible driving.";
  const image =
    propImage || "";
  const keywords =
    propKeywords ||
    "Hariom Motor Driving School, Driving lessons, Defensive driving, Road safety, Driving instructors, Learner drivers, Driving courses, Driver training, License test preparation, Traffic rules";

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=yes"/>
      <link
        rel="icon"
        href=""
        type="image/x-icon"
      />
      <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
      <meta charSet="UTF-8" />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Hariom Motor Driving School" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

export default MetaTags;
