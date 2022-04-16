function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositForm(props){    
    const [deposit, setDeposit] = React.useState('');
  
    function handle(){
      fetch(`/account/update/${deposit}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(JSON.stringify(data.value));
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus('Deposit Success')
              console.log('err:', text);
          }
      });
    }
  
    return(
      <>     
      Deposit Amount<br/>
      <input type="number" className="form-control" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>  
      <button disabled={!deposit} type="submit" className="btn btn-light" onClick={handle}>Deposit</button>  
    </>);
  }
