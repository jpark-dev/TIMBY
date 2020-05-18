import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, waitFor, fireEvent, getByText, prettyDOM, getByTestId, getAllByTestId, getByAltText, getByPlaceholderText, queryByText, queryByAltText} from "@testing-library/react";
import Booking from '../Bookings/Booking.js';

afterEach(cleanup);

describe('Booking', () => {

  it('renders without crashing', () => { 
    render(<Booking />); 
  });

  it('views the details of a tour and opens the cancel dialog', async () => {
    const props = {
      id: 5,
      status: "Pending",
      date_time: "2020-05-23 18:00:00",
      title: "Tour de Breweries",
      description: "Bike and beer tour of Vancouver's best breweries",
      city: "Vancouver",
      lat: "49.274950",
      lng: "-123.122628",
      host_id: 1,
      tour_id: 1,
      image_src: "/docs/vancouver_breweries_00.jpg",
      host_name: "Alice",
      host_phone: "111-222-3333"
    }
  
    const { getByText } = render(<Booking {...props} />);
  
    await waitFor(() => {
      expect(getByText("Details")).toBeInTheDocument();
    })
  
    fireEvent.click(getByText("Details"));
    expect(getByText("Hosted By Alice (111-222-3333)")).toBeInTheDocument();

    fireEvent.click(getByText("Cancel Booking"));
    expect(getByText("Are you sure you want to cancel this booking?")).toBeInTheDocument();
  });

  it('views the details of a tour and submits feedback', async () => {
    const props = {
      id: 5,
      status: "Completed",
      date_time: "2020-05-23 18:00:00",
      title: "Tour de Breweries",
      description: "Bike and beer tour of Vancouver's best breweries",
      city: "Vancouver",
      lat: "49.274950",
      lng: "-123.122628",
      host_id: 1,
      tour_id: 1,
      image_src: "/docs/vancouver_breweries_00.jpg",
      host_name: "Alice",
      host_phone: "111-222-3333"
    }
  
    const { getByText } = render(<Booking {...props} />);
  
    await waitFor(() => {
      expect(getByText("Details")).toBeInTheDocument();
    })
  
    fireEvent.click(getByText("Details"));
    expect(getByText("Hosted By Alice (111-222-3333)")).toBeInTheDocument();

    fireEvent.click(getByText("Feedback"));
    expect(getByText("Rating")).toBeInTheDocument();

    fireEvent.click(getByText("Submit"));

    await waitFor(() => {
      expect(getByText("Feedback submitted successfully!")).toBeInTheDocument();
    })

  });


})
