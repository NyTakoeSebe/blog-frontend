import React, { FC } from 'react';
import { Icon } from './Icon.types';

const LoginIcon: FC<Icon> = ({ color = 'black', height = 24, width = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3 12.22C13.8336 11.7581 14.2616 11.1869 14.5549 10.545C14.8482 9.90316 15 9.20571 15 8.5C15 7.17392 14.4732 5.90215 13.5355 4.96447C12.5979 4.02678 11.3261 3.5 10 3.5C8.67392 3.5 7.40215 4.02678 6.46447 4.96447C5.52678 5.90215 5 7.17392 5 8.5C4.99999 9.20571 5.1518 9.90316 5.44513 10.545C5.73845 11.1869 6.16642 11.7581 6.7 12.22C5.30014 12.8539 4.11247 13.8775 3.27898 15.1685C2.4455 16.4596 2.00147 17.9633 2 19.5C2 19.7652 2.10536 20.0196 2.29289 20.2071C2.48043 20.3946 2.73478 20.5 3 20.5C3.26522 20.5 3.51957 20.3946 3.70711 20.2071C3.89464 20.0196 4 19.7652 4 19.5C4 17.9087 4.63214 16.3826 5.75736 15.2574C6.88258 14.1321 8.4087 13.5 10 13.5C11.5913 13.5 13.1174 14.1321 14.2426 15.2574C15.3679 16.3826 16 17.9087 16 19.5C16 19.7652 16.1054 20.0196 16.2929 20.2071C16.4804 20.3946 16.7348 20.5 17 20.5C17.2652 20.5 17.5196 20.3946 17.7071 20.2071C17.8946 20.0196 18 19.7652 18 19.5C17.9985 17.9633 17.5545 16.4596 16.721 15.1685C15.8875 13.8775 14.6999 12.8539 13.3 12.22ZM10 11.5C9.40666 11.5 8.82664 11.3241 8.33329 10.9944C7.83994 10.6648 7.45542 10.1962 7.22836 9.64805C7.0013 9.09987 6.94189 8.49667 7.05764 7.91473C7.1734 7.33279 7.45912 6.79824 7.87868 6.37868C8.29824 5.95912 8.83279 5.6734 9.41473 5.55764C9.99667 5.44189 10.5999 5.5013 11.1481 5.72836C11.6962 5.95542 12.1648 6.33994 12.4944 6.83329C12.8241 7.32664 13 7.90666 13 8.5C13 9.29565 12.6839 10.0587 12.1213 10.6213C11.5587 11.1839 10.7956 11.5 10 11.5ZM21.71 9.13C21.617 9.03627 21.5064 8.96188 21.3846 8.91111C21.2627 8.86034 21.132 8.8342 21 8.8342C20.868 8.8342 20.7373 8.86034 20.6154 8.91111C20.4936 8.96188 20.383 9.03627 20.29 9.13L18.29 11.13L17.67 10.5C17.577 10.4063 17.4664 10.3319 17.3446 10.2811C17.2227 10.2303 17.092 10.2042 16.96 10.2042C16.828 10.2042 16.6973 10.2303 16.5754 10.2811C16.4536 10.3319 16.343 10.4063 16.25 10.5C16.0637 10.6874 15.9592 10.9408 15.9592 11.205C15.9592 11.4692 16.0637 11.7226 16.25 11.91L17.59 13.25C17.7774 13.4363 18.0308 13.5408 18.295 13.5408C18.5592 13.5408 18.8126 13.4363 19 13.25L21.67 10.58C21.771 10.4893 21.8524 10.379 21.9094 10.2559C21.9664 10.1327 21.9977 9.99924 22.0014 9.86359C22.0052 9.72794 21.9813 9.59294 21.9312 9.46682C21.8811 9.34071 21.8058 9.22611 21.71 9.13Z"
        fill={color}
      />
    </svg>
  );
};

export default LoginIcon;
