import { Input } from "../basic/genial/input";
import { Tag } from "../basic/genial/tag";

interface BlogHeader {
  search: string;
  onSearchChange: (val: string) => void;

  tags: string[];
  activeTag: string;

  onTagChange: (tag: string) => void;
}

const BlogHeader = ({
  search,
  onSearchChange,
  tags,
  activeTag,
  onTagChange,
}: BlogHeader) => {
  return (
    <div className="flex flex-1  lg:flex-row flex-col justify-between w-full lg:items-center mb-12 gap-4 py-10">
      <div className="flex gap-6  w-full lg:w-auto py-3 lg:py-0  overflow-auto ">
        {tags.map((el) => (
          <Tag
            isActive={el === activeTag}
            value={el}
            onClick={() => onTagChange(el)}
          />
        ))}
      </div>
      <Input
        variant="primary"
        value={search}
        size="lg"
        onChange={(e) => onSearchChange(e.target.value)}
        type="search"
        placeholder="search..."
      />
    </div>
  );
};

export { BlogHeader };
