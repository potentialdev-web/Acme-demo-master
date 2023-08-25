import mock from '../utils/mock';

mock.onGet('/api/conversations').reply(() => {
  const messages = [
  ]

return [200, { messages }];
});