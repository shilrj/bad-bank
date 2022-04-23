function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawForm(props){  
  const [amount, setAmount] = React.useState('');

  function handle(){
    fetch(`/account/update/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Withdraw success')
            console.log('err:', text);
        }
    });
  }


  return(
    <>
    Withdraw Amount<br/>
    <input type="number" className="form-control" placeholder="Withdraw Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
    <button type="submit" className="btn btn-light" onClick={handle}>Withdraw</button>
  </>);
}