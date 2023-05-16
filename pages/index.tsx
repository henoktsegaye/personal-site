// pages/index.tsx
import { useMemo, useState } from "react";
import { IPost } from "../types/post";
import { getAllPosts } from "../lib/mdxUtils";
import LanguageStrings, { langType } from "../lib/lang";
import { AnimatePresence } from "framer-motion";
import { BlogHeader } from "../components/blog/blogHeader";
import { BlogCard } from "../components/blog/BlogCard";
import { BlogNav } from "../components/blog/blogNav";
import { Text } from "../components/basic/genial/text";
import Footer from "../components/layout/footer";
import Meta from "../components/layout/meta";

type Props = {
  files: {
    posts: IPost[];
    works: IPost[];
  };
  localeString: langType;
  locale: "am" | "en";
};

const Home: React.FC<Props> = ({ files, localeString, locale }) => {
  const { posts } = files;
  const { footer, general, socialMedia } = localeString;

  const tags = useMemo(
    () => new Set(posts.map((el) => el.hashtag.split(" ")).flat()),
    [posts]
  );

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const selectedPostsByTag = useMemo(
    () =>
      activeTag
        ? posts.filter((el) => el.hashtag.split(" ").includes(activeTag))
        : posts,
    [activeTag, posts]
  );
  const selectedPosts = useMemo(
    () =>
      search
        ? selectedPostsByTag.filter((el) =>
            el.title.toLowerCase().includes(search.toLowerCase())
          )
        : selectedPostsByTag,
    [selectedPostsByTag, search]
  );

  return (
    <div className=" h-full w-full ">
      <Meta
        socialMedia={socialMedia}
        siteString={{
          siteTitle: general.siteTitle,
          siteDescription: general.siteDescription,
        }}
        title="homepage"
      />
      <BlogNav />
      <div>
        <div className="  h-full flex flex-col  w-full   ">
          <div className="py-10 mt-6 max-w-screen-lg  2xl:max-w-screen-xl px-4 lg:px-0 mx-auto relative w-full">
            <div className="grid grid-cols-12 gap-2 ">
              <div className="my-6 col-span-12 ">
                <BlogHeader
                  tags={["All", ...tags]}
                  search={search}
                  onSearchChange={setSearch}
                  activeTag={activeTag ?? "All"}
                  onTagChange={(tag: string) =>
                    setActiveTag(tag !== "All" ? tag : null)
                  }
                />
                <div className="grid 2xl:grid-cols-1 grid-cols-1 lg:grid-cols-1 gap-2">
                  <AnimatePresence>
                    {selectedPosts.length === 0 && (
                      <Text size="xl">No results Found </Text>
                    )}
                    {selectedPosts.map((el, index) => (
                      <BlogCard blog={el} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer footer={footer} socialMedia={socialMedia} />
    </div>
  );
};

export default Home;

export const getStaticProps = async ({
  locale = "en",
}: {
  locale: "am" | "en";
}) => {
  const files = getAllPosts([
    "slug",
    "date",
    "thumbnail",
    "title",
    "description",
    "hashtag",
  ]);

  const localeString: langType = LanguageStrings[locale];

  return { props: { files, localeString, locale } };
};
