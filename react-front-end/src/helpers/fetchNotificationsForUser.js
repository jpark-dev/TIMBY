// Returns array of notifications
export default function fetchNotificationsForUser(userID) {
  return fetch(`${process.env.REACT_APP_API_URL}/notifications/${userID}`, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error => console.log(error));
};