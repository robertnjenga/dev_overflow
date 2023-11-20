import { Input } from '@/components/ui/input';
import Image from 'next/image';

const LocalSearchbar = () => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4`}
    >
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder="Search questions..."
        value=""
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
