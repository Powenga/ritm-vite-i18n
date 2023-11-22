import './Line.scss';
import React, { FunctionComponent, SVGProps, useRef } from 'react';
import useLine from '../../utils/hooks/useLine';

interface TProps {
  lineSVG: FunctionComponent<SVGProps<SVGSVGElement>>;
  classLineSVG: string;
  classLineWrapper?: string;
}

const Line: React.FC<TProps> = ({
  lineSVG,
  classLineSVG = '',
  classLineWrapper = '',
}) => {
  const LineSVG = lineSVG;
  const lineWrapperRef = useRef(null);
  const line = useLine(lineWrapperRef);
  const lineElement = line.isEnabled && (
    <LineSVG className={`line-element ${classLineSVG}`} />
  );

  return (
    <div ref={lineWrapperRef} className={`line-wrapper ${classLineWrapper}`}>
      {lineElement}
    </div>
  );
};

export default Line;
