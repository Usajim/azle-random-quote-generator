export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'getQuote' : IDL.Func([], [IDL.Text], ['query']) });
};
export const init = ({ IDL }) => { return []; };
