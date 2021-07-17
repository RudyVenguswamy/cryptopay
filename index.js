console.log('HELLO GONNA CALL API NOW...')
const userAction = async () => {
    const response = await fetch('https://api.commerce.coinbase.com/events', {
        method: 'GET',
        
        headers: {
           // 'Content-Type': 'application/json',
            'X-CC-Api-Key': '8013553f-814d-4a11-a0b0-5ca6d7211ae3',
            'X-CC-Version': '2018-03-22'
        },

        // body: JSON.stringify({

        //     'name': 'TEST NAME HERE',
        //     'description': '(TEST) Mastering the Transition to the Information Age',
        //     'pricing_type': 'no_price',
        //     "requested_info": ["email"]
        // })


    }
    );
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
  }

  userAction()