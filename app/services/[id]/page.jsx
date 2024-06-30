import { CallToAction, Hero } from "../../components";
import { pageData } from "../../data";
import { getPostData } from "../../lib/markdown";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import NotFound from "../../not-found";
import '../../styles/markdown.css';

const Page = async ({ params }) => {
  const postData = await getPostData(params.id);

  if (!pageData[params.id]) {
    return <NotFound />;
  }

  return (
    <div className="my-[100px] md:my-[150px]">
      <Hero
        title={pageData[params.id].heroTitle}
        subtitle={pageData[params.id].hertoSubtitle}
        paragraph={pageData[params.id].heroParagraph}
      />
      <CallToAction title={pageData[params.id].ctaTitle} />
      <div className="markdown-content">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {postData.contentHtml}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(pageData).map((key) => ({
    params: { id: key },
  }));

  return {
    paths,
    fallback: true, 
  };
}

export async function getStaticProps({ params }) {
  const service = pageData[params.id];
  
  if (!service) {
    return {
      notFound: true,
    };
  }

  const postData = await getPostData(params.id);

  return {
    props: {
      service,
      postData,
    },
  };
}

export default Page;
