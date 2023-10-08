import React, { PropsWithChildren } from 'react'

const FormsAndInfoLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default FormsAndInfoLayout;