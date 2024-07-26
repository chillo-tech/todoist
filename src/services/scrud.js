const search = ({path}) => {
   return fetch(`/api/${path}`);
};

export {search};