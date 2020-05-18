import mockAxios from 'axios';
import '@testing-library/jest-dom/extend-expect'
import fetchBookingsForUser from '../../helpers/fetchBookingsForUser.js';

describe('Helpers', () => {
  
  it("fetches bookings data", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { bookings: [
            {
              id: 5,
              title: 'Tour de Breweries',
              status: 'Pending'
            }
          ] 
        }
      })
    );
  
    const bookings = await fetchBookingsForUser(7);
  
    expect(bookings).toEqual([
      {
        id: 5,
        title: 'Tour de Breweries',
        status: 'Pending'
      }
    ]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/bookings/user/7`);
  });

});