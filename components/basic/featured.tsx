// components/Thumbnail.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
  color?: string;
};

const Featured: React.FC<Props> = ({ title, src, slug, color }: Props) => {
  const image = (
    <div
      className={`bg-white dark:bg-gray-900  dark:border-gray-800  rounded-3xl  py-4`}
    >
      <div className="w-80 h-80 mx-auto  relative ">
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          layout="fill"
          objectFit="contain"
          className="rounded-xl"
        />
      </div>
    </div>
  );
  return (
    <>
      {slug ? (
        <Link href={`/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Featured;
