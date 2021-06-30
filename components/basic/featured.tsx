// components/Thumbnail.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const Featured: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <div className="w-full h-80 mx-auto bg-transparent relative ">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        layout="fill"
        objectFit="contain"
        className="rounded-xl"
      />
    </div>
  );
  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Featured;
