import React, { FC } from 'react';
import { Icon } from './Icon.types';

const BackIcon: FC<Icon> = ({ color = 'black', height = 24, width = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.41 12L16.71 8.71C16.8032 8.61676 16.8772 8.50607 16.9277 8.38425C16.9781 8.26243 17.0041 8.13186 17.0041 8C17.0041 7.86814 16.9781 7.73758 16.9277 7.61575C16.8772 7.49393 16.8032 7.38324 16.71 7.29C16.6168 7.19676 16.5061 7.1228 16.3842 7.07234C16.2624 7.02188 16.1319 6.99591 16 6.99591C15.8681 6.99591 15.7376 7.02188 15.6158 7.07234C15.4939 7.1228 15.3832 7.19676 15.29 7.29L11.29 11.29C11.1963 11.383 11.1219 11.4936 11.0711 11.6154C11.0203 11.7373 10.9942 11.868 10.9942 12C10.9942 12.132 11.0203 12.2627 11.0711 12.3846C11.1219 12.5064 11.1963 12.617 11.29 12.71L15.29 16.71C15.383 16.8037 15.4936 16.8781 15.6154 16.9289C15.7373 16.9797 15.868 17.0058 16 17.0058C16.132 17.0058 16.2627 16.9797 16.3846 16.9289C16.5064 16.8781 16.617 16.8037 16.71 16.71C16.8037 16.617 16.8781 16.5064 16.9289 16.3846C16.9797 16.2627 17.0058 16.132 17.0058 16C17.0058 15.868 16.9797 15.7373 16.9289 15.6154C16.8781 15.4936 16.8037 15.383 16.71 15.29L13.41 12ZM8 7C7.73478 7 7.48043 7.10536 7.29289 7.2929C7.10536 7.48043 7 7.73479 7 8V16C7 16.2652 7.10536 16.5196 7.29289 16.7071C7.48043 16.8946 7.73478 17 8 17C8.26522 17 8.51957 16.8946 8.70711 16.7071C8.89464 16.5196 9 16.2652 9 16V8C9 7.73479 8.89464 7.48043 8.70711 7.2929C8.51957 7.10536 8.26522 7 8 7Z"
        fill={color}
      />
    </svg>
  );
};

export default BackIcon;
