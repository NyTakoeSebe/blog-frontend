import React, { FC } from 'react';
import { Icon } from './Icon.types';

const CommentIcon: FC<Icon> = ({ color = 'black', height = 24, width = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9999 2C10.6866 2 9.38629 2.25866 8.17303 2.7612C6.95978 3.26375 5.85738 4.00035 4.9288 4.92893C3.05343 6.8043 1.99987 9.34784 1.99987 12C1.99112 14.3091 2.79066 16.5485 4.25987 18.33L2.25987 20.33C2.12111 20.4706 2.02711 20.6492 1.98974 20.8432C1.95236 21.0372 1.97329 21.2379 2.04987 21.42C2.13292 21.5999 2.26757 21.7511 2.43671 21.8544C2.60586 21.9577 2.80187 22.0083 2.99987 22H11.9999C14.652 22 17.1956 20.9464 19.0709 19.0711C20.9463 17.1957 21.9999 14.6522 21.9999 12C21.9999 9.34784 20.9463 6.8043 19.0709 4.92893C17.1956 3.05357 14.652 2 11.9999 2ZM11.9999 20H5.40987L6.33987 19.07C6.52612 18.8826 6.63066 18.6292 6.63066 18.365C6.63066 18.1008 6.52612 17.8474 6.33987 17.66C5.03045 16.352 4.21504 14.6305 4.03256 12.7888C3.85007 10.947 4.31181 9.09901 5.33909 7.55952C6.36638 6.02004 7.89566 4.88436 9.66638 4.34597C11.4371 3.80759 13.3397 3.8998 15.0501 4.60691C16.7604 5.31402 18.1727 6.59227 19.0463 8.22389C19.9199 9.85551 20.2007 11.7395 19.841 13.555C19.4813 15.3705 18.5032 17.005 17.0734 18.1802C15.6436 19.3554 13.8506 19.9985 11.9999 20Z"
        fill={color}
      />
    </svg>
  );
};

export default CommentIcon;
