// Inspired by: https://benadam.me/thoughts/react-svg-sprites/

import * as React from 'react';
import clsx from 'clsx';

interface IconProps {
  id: string;
  className?: string;
  width: string;
  height: string;
}

//
// eslint-disable-next-line react/display-name
export const Icon: React.FunctionComponent<IconProps> = React.forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (props, _ref) => {
    const { id, className, height, width } = props;
    return (
      <>
        <svg
          aria-hidden
          className={clsx(className, 'svg-container')}
          width={width}
          height={height}
        >
          <use href={`/icons/sprite.svg#${id}`} />
        </svg>
      </>
    );
  },
);
