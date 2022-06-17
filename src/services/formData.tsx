export async function submitData(insuranceDetails : object, userDetails: object) {
    const response = await window.fetch('https://www.example.com', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      userDetails,
      insuranceDetails
    }),
  })

  if(response.ok)
  {
      console.log('Successful');
  }
  else
  {
    console.log('Failure');
  }
}