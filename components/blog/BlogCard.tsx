import { Blog } from "../../types/post";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { Text } from "../basic/genial/text";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const route = useRouter();
  const { title, description, slug, date, thumbnail } = blog;
  return (
    <motion.div
      key={title}
      initial={{ transform: "translateY(30px)" }}
      animate={{ transform: "translateY(0px)" }}
      className="grid  bg-transparent "
    >
      <div
        className={` lg:col-span-6 grid-cols-3 items-center cursor-pointer grid   rounded-lg lg:grid-cols-6 border-gray-200 dark:border-gray-900  `}
        onClick={(e) => {
          e.preventDefault();
          route.push(`/blogs/${slug}`);
        }}
      >
        <div className=" col-span-3  flex flex-col justify-between pr-4 ">
          <div>
            <Link href={`/blogs/${slug}`}>
              <Text
                isTitle
                size="4xl"
                bold="extrabold"
                className="line-clamp-2 leading-snug min-h-30 cursor-pointer mb-1  "
              >
                {title}
              </Text>
            </Link>
            <Text size="xl" className=" mt-2 ">
              {format(new Date(date), "MMM do yyyy")}
            </Text>
            <Text size="xl" title="h3" className="line-clamp-2 mt-4 mr-12">
              {description}
            </Text>
          </div>
          <Text className=" mt-4">
            <span className="">2 minute read</span>
          </Text>
        </div>
        <div className="col-span-3 hidden lg:flex ml-20 h-full justify-end items-center ">
          <img src={thumbnail} className=" h-3/4 rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export { BlogCard };
