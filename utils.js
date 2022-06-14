const IfComponent = ({ statement, children }) => {
  return statement ? children : '';
};

const ElseComponent = ({ statement, children }) => {
  return statement ? '' : children;
};
