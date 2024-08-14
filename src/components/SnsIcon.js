import {
  EmailShareButton,
  EmailIcon,
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { FaSquareXTwitter } from "react-icons/fa6";

export const SnsIcon = ({ iconSize = 55 }) => {
  const getSize = (size) => {
    return size; // 必要に応じてサイズの変換や条件をここで実装
  };

  return (
    <>
      <EmailShareButton url={"URL"}>
        <EmailIcon size={getSize(iconSize)} round />
      </EmailShareButton>
      <FacebookShareButton url={"URL"}>
        <FacebookIcon size={getSize(iconSize)} round />
      </FacebookShareButton>
      <LineShareButton url={"URL"}>
        <LineIcon size={getSize(iconSize)} round />
      </LineShareButton>
      <FaSquareXTwitter size={getSize(iconSize)} round />
    </>
  );
};
