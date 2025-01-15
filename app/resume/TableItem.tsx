interface Props {
  title: string;
  desctiption: string;
  data?: [];
}

export const TableItem = ({ desctiption, title }: Props) => {
  return (
    <div className="flex flex-col gap-8 text-center xl:text-left">
      <h3 className="font-bold text-4xl">{title}</h3>
      <p className="text-lg max-w-[600px] mx-auto xl:mx-0 text-white/80">
        {desctiption}
      </p>
    </div>
  );
};
