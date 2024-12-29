```javascript
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    let interval = setInterval(() => {
      if (isMounted.current) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      isMounted.current = false;
    };
  }, []);

  return (
    <Text>{count}</Text>
  );
};

```
By using a useRef hook to track whether the component is mounted and only updating state if it's still mounted, we prevent the error from occurring.