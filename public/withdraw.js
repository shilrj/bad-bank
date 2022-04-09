function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [WithdrawAmount, setWithdrawAmount] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleLogin(){
    console.log(balance,WithdrawAmount);
    if (!validate(WithdrawAmount, 'Withdraw Amount')) return;
    ctx.users.push({WithdrawAmount,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="WithDraw Amount"
      status={status}
      body={show ? (  
              <>
              Withdraw Amount<br/>
              <input type="input" className="form-control" id="name" placeholder="Withdraw" value={name} onChange={e => setWithdrawAmount(e.currentTarget.value)} /><br/>      
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}

function WithdrawForm(props){
    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState('');
  
    function handle(){
      fetch(`/account/update/${email}/-${amount}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(JSON.stringify(data.value));
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus('Deposit failed')
              console.log('err:', text);
          }
      });
    } 
  
    return(<>  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} 
        onChange={e => setAmount(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>
          Withdraw
      </button>
  
    </>);
  }
