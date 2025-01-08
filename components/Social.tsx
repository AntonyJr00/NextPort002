import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, path: "/github" },
  { icon: <FaLinkedin />, path: "/github" },
  { icon: <FaTwitter />, path: "/github" },
];

interface Props {
  containerStyle: string;
  iconStyle: string;
}
export const Social = ({ containerStyle, iconStyle }: Props) => {
  return (
    <div className={containerStyle}>
      {socialIcons.map((icon, i) => (
        <Link className={iconStyle} key={i} href={icon.path}>
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};
