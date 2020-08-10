import React, { useEffect, useState } from 'react';

interface Props {
    name: String;
}

export const Mission = (props: Props) => {
  const [name, setName] = useState<String>();

  useEffect(() => {
      setName(props.name);
  },[props.name]);

  return (
      <div>
          {name}
      </div>
  );
}