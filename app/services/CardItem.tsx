import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

interface Props {
  num: string;
  title: string;
  description: string;
  href: string;
}

export const CardItem = ({ description, href, num, title }: Props) => {
  return (
    <div className="flex flex-col bg-blue-700/5 gap-6 border-b-4 border-white group hover:border-white hover:bg-accent transition-all duration-500 p-10 xl:p16">
      <Link href={href} className="w-full flex justify-start items-baseline">
        <span className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
          {num}
        </span>
        <BsArrowDownRight className="text-accent group-hover:text-primary text-2xl transition-all duration-500" />
      </Link>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl capitalize font-extrabold group-hover:text-primary transition-all duration-500">
          {title}
        </h2>
        <p className="text-white/80 text-sm group-hover:text-primary transition-all duration-500 w-5/6">
          {description}
        </p>
      </div>
    </div>
  );
};
