function Balance(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState(''); 
  const [email, setEmail]       = React.useState(''); 
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleBalance(){
    console.log(email);
    if (!validate(email,    'email'))    return;
    ctx.users.push({email,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Balance"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleBalance}>Balance</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Check Balance</button>
              </>
            )}
    />
  )
}