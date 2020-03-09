import Axios from 'axios';
Axios.defaults.baseURL = process.env.API_URL || 'http://localhost:3000';
console.log('process.env.API_URL', process.env.API_URL)

export const CRUD_TO_METHOD = {
  GET: 'get',
  UPDATE: 'put',
  CREATE: 'post',
  DELETE: 'delete'
}

export const TYPES_THAT_NEED_ID = ['PUT', 'DELETE', 'GET_ONE'];

export const makeRequest = (opts) => {
  console.log('opts', opts)
  const requestOpts = processRequestOptions(opts);
  console.log('requestOpts :', requestOpts);
  return Axios({
    ...requestOpts,
    mode: 'cors',
    credentials: 'include'
  })
    .then(response => {
      console.log('response :', response);
      return response && response.data;
    })
};

export const getMethodFromCrudType = (crudType) => {
  const inputCrudType = crudType.split('_')[0];
  return CRUD_TO_METHOD[inputCrudType];
}

export const processRequestOptions = ({
  crudType,
  resource,
  body,
  filter
}) => {
  crudType = crudType.toUpperCase(); // for consistency
  const method = getMethodFromCrudType(crudType)
  let url = `/${resource}`;
  if (TYPES_THAT_NEED_ID.includes(crudType)) {
    if (!body.id) throw new Error('id not provided');
    url += `/${body.id}`;
  }
  // TO DO: if (crudType === 'GET_MANY' && filter)
  return {
    url,
    method,
    data: body,
  }
}