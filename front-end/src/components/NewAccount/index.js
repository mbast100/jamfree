import { Card, makeStyles } from '@material-ui/core'
import React from 'react'
import MenuTabs from './components/MenuTabs'
import OrganizationForm from './components/OrganizationForm'
import UserForm from './components/UserForm'

const useStyles = makeStyles((theme) => ({
  root:{
    margin:"auto",
    backgroundColor:'#F8F8F8',
    [theme.breakpoints.up('md')]:{
      width:"600px",
    },
    [theme.breakpoints.down('sm')]:{
      width:"90%",
    }
  }
}))

export default function NewAccount() {
  const classes = useStyles()
  const [accountType, setAccountType] = React.useState('user');

  const onMenuChange = (value) => {
    if(value === 0){setAccountType('user')}
    else if(value === 1){setAccountType('organization')}
  }
  const NewUserForm = (accountType === 'user') && (<UserForm/>);
  const OrgForm = (accountType === 'organization') && (<OrganizationForm/>);
  
  return (
    <div style={{margin:"auto", marginTop:"20px"}} >
        <Card className={classes.root}>
          <MenuTabs onMenuChange={onMenuChange} />
          {NewUserForm}
          {OrgForm}
          <div style={{paddingBottom:"20px"}}>
            <a href="/login" >Already have an account? Sign in</a>
          </div>
        </Card>`
    </div>
  )
}
