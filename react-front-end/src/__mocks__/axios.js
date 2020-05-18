const fixtures = {
  bookings: [
    {
      id: 5,
      title: 'Tour de Breweries',
      status: 'Pending'
    }
  ]
};

export default {
  get: jest.fn(url => {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.bookings
      });
  }),
  post: jest.fn(url => {
    return Promise.resolve({
      status: 200,
      statusText: "OK",
      data: {}
    });
  })
}