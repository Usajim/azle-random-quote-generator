export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getPersonalisedQuote' : IDL.Func([], [IDL.Text], ['query']),
    'getQuote' : IDL.Func([], [IDL.Text], ['query']),
    'setMessage' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
