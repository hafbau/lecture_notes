/**
 * Example input object:
 const optionalOptionsObject = {
   crudType: 'GET_ONE',
   resource: 'projects',
   body: {
     id: '1'
   },
   filter: null
 }
  const [triggerFn, err, loading, data] = useApi(optionalOptionsObject);
  triggerFn may or may not need arguments - it should throw, if required args are not passed
  example use case of triggerFn will be:
  triggerFn({
    crudType: 'GET_ONE',
    resource: 'projects',
    body: { id: '1' },
    filter: null
  })
*/
import { useState, useEffect, useCallback } from 'react';
import { useGlobal } from '../state';
import { makeRequest } from '../lib/apiHelpers';

export const useApi = (initOpts) => {
  const [global] = useGlobal();
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);

  const triggerFn = useCallback(
    (opts = initOpts) => {
    setLoading(true)
    setErr(null)
    return makeRequest({
        ...opts,
        token: global.token
      })
      .then(setData) // we agree to not setGlobal here for now
      .catch(err => setErr({ message: 'Something bad has happened' })) // we definitely need to process this error obj more before sending it downstream
      .finally(() => setLoading(false))
  }, [global.token, initOpts]);

  useEffect(() => {
    if (initOpts) {
      triggerFn(initOpts)
    }
  }, [initOpts, triggerFn]);

  return [err, loading, data, triggerFn];
}