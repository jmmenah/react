import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Loginpage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/NotFoundPage';
import Profilepage from './pages/profile/ProfilePage';
import Taskspage from './pages/tasks/TasksPage';


function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Redirect from='/' to='/dashboard' />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={Loginpage} />  
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<Dashboardpage />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        {/* Profile Route */}
        <Route path='/profile' component={ Profilepage }>
            {
            loggedIn ? 
            <Profilepage />
            :
            () => {
                alert('You must be logged in. Redirecting to login...')
                return (<Redirect to='/login'/>)
            }
            }
        </Route>
        {/* Tasks Route */}
        <Route path='/tasks' component={ Taskspage } />
        <Route component={Notfoundpage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
