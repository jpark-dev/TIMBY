export default function notifyUser (userID, text) {
  fetch(`${process.env.REACT_APP_API_URL}/notifications/send/${userID}`, {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.text())
  .then(text => text)
  .catch(error => console.log(error));
}