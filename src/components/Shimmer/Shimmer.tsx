import * as React from 'react';
import { Shimmer, ShimmerElementType } from 'office-ui-fabric-react/lib/Shimmer';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const wrapperClass = mergeStyles({
  padding: 2,
  selectors: {
    '& > .ms-Shimmer-container': {
      margin: '10px 0'
    }
  }
});

export const ShimmerBasic: React.StatelessComponent = () => {
  return (
    <Fabric className={wrapperClass}>
      <Shimmer
        shimmerElements={[
          { type: ShimmerElementType.circle },
          { type: ShimmerElementType.gap, width: '2%' },
          { type: ShimmerElementType.line }
        ]}
      />
      <Shimmer
        shimmerElements={[
          { type: ShimmerElementType.circle, height: 24 },
          { type: ShimmerElementType.gap, width: '2%' },
          { type: ShimmerElementType.line, height: 16, width: '20%' },
          { type: ShimmerElementType.gap, width: '5%' },
          { type: ShimmerElementType.line, height: 16, width: '20%' },
          { type: ShimmerElementType.gap, width: '10%' },
          { type: ShimmerElementType.line, height: 16, width: '15%' },
          { type: ShimmerElementType.gap, width: '10%' },
          { type: ShimmerElementType.line, height: 16 }
        ]}
      />
    </Fabric>
  );
};