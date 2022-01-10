import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons/lib';
import {
  FaSearch as Search,
  FaRegClock as Clock,
  FaRegEye as OpenEye,
  FaRegEyeSlash as CloseEye,
  FaRegFileAlt as File,
} from 'react-icons/fa';
import { FiUser as User, FiBell as Bell } from 'react-icons/fi';
import { IoImage as Image, IoCloseCircle as CloseCircle } from 'react-icons/io5';
import { BsPeopleFill as People } from 'react-icons/bs';
import { HiOutlineUserCircle as UserCircle } from 'react-icons/hi';
import { RiLogoutBoxLine as Logout } from 'react-icons/ri';
import { IoIosSend as Send } from 'react-icons/io';

import {
  MdKeyboardArrowDown as KbArrowDawn,
  MdMenu as Menu,
  MdMoreVert,
  MdClose as Close,
  MdArrowDropDown as DropDown,
  MdArrowDropUp as DropUp,
  MdAdd as Add,
  MdArrowBack as ArrowBack,
  MdRemove as Remove,
  MdInfoOutline as InfoOutline,
  MdArrowForward as ArrowForward,
  MdErrorOutline as ErrorOutline,
  MdPhotoCamera as PhotoCamera,
  MdFileDownload as Download,
} from 'react-icons/md';
import styled, { css, DefaultTheme } from 'styled-components';

type TColor = keyof DefaultTheme['colors'];
type TSize = number;
type TMargin = number | string;

export interface IIcon {
  iconColor?: TColor;
  /** If it is `number`, it will be in `rem` */
  iconSize?: TSize;
  /** If it is `number`, it will be in `rem` */
  margin?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginTop?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginRight?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginBottom?: TMargin;
  /** If it is `number`, it will be in `rem` */
  marginLeft?: TMargin;
  clickable?: boolean;
  /** If it is `true`, not add css prop ``color` */
  notColor?: boolean;
  onClick?: MouseEventHandler<SVGElement>;
}

const getMargin = (margin: TMargin) =>
  margin ? (typeof margin === 'number' ? `${margin}rem` : margin) : 'invalid';

const getSize = (size: TSize) => (typeof size === 'number' ? `${size}rem` : size);

const getColor = (color: TColor, theme: DefaultTheme) => theme.colors[color];

const addStyle = (Icon: IconType) => styled(Icon)<IIcon>`
  ${({ iconColor, notColor, theme }) =>
    !notColor &&
    css`
      color: ${iconColor ? getColor(iconColor, theme) : 'inherit'};
    `};

  font-size: ${({ iconSize = 1 }) => getSize(iconSize)};

  margin-top: ${({ marginTop = 0 }) => getMargin(marginTop)};
  margin-right: ${({ marginRight = 0 }) => getMargin(marginRight)};
  margin-bottom: ${({ marginBottom = 0 }) => getMargin(marginBottom)};
  margin-left: ${({ marginLeft = 0 }) => getMargin(marginLeft)};
  margin: ${({ margin = 0 }) => getMargin(margin)};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: filter 0.2s;

      :hover {
        filter: brightness(80%);
      }

      :active {
        filter: brightness(70%);
      }
    `}
`;

export const icons = {
  search: addStyle(Search),
  user: addStyle(User),
  bell: addStyle(Bell),
  kbArrowDawn: addStyle(KbArrowDawn),
  menu: addStyle(Menu),
  moreVert: addStyle(MdMoreVert),
  close: addStyle(Close),
  dropDown: addStyle(DropDown),
  dropUp: addStyle(DropUp),
  add: addStyle(Add),
  arrowBack: addStyle(ArrowBack),
  image: addStyle(Image),
  remove: addStyle(Remove),
  clock: addStyle(Clock),
  people: addStyle(People),
  infoOutline: addStyle(InfoOutline),
  arrowForward: addStyle(ArrowForward),
  closeCircle: addStyle(CloseCircle),
  openEye: addStyle(OpenEye),
  closeEye: addStyle(CloseEye),
  userCircle: addStyle(UserCircle),
  logout: addStyle(Logout),
  send: addStyle(Send),
  errorOutline: addStyle(ErrorOutline),
  file: addStyle(File),
  photoCamera: addStyle(PhotoCamera),
  download: addStyle(Download),
};
