import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import dashboard from './Componenets/dashboard/Dashboard';
import Signup from './Componenets/SignUp/Signup';
import ProtectedRoute from './Componenets/SignUp/router/ProtectedRoute';
import CustRoute from './Componenets/SignUp/router/CustRoute'
import { currentUser } from './JS/actions/user';
import { useDispatch } from 'react-redux';
import Signin from './Componenets/Signin/Signin';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Add from './Componenets/bags/addbag';
import Bag from '../src/Componenets/bags/Bag'
import BagList from './Componenets/bags/bags';
import BagListC from './Componenets/custbag/listbagC';
import Orders from './Componenets/order/order';
import Editbag from './Componenets/bags/editbag';
import RecommandedBag from './Componenets/custbag/recommandedBag';
import Showbag from './Componenets/bags/testbag'
import Home from './Componenets/filter/filter'
import StickyFooter from './Componenets/footer/footer';
import Landing from './Componenets/landing/landing';
import Search from './Componenets/search'
import CustDashboard from './Componenets/dashboard/custdashboard';
import Header from './Componenets/landing/header'
import OneDemande from './Componenets/custdemandes/demande'
import Demandelist from './Componenets/custdemandes/mesdemandes'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [])
 
  return (
    <div className="App">
       {/** <Link to="/addUser"><Button inverted color='brown'>
        Add
      </Button></Link>*/} 
      <Header/>
     
<Switch>
  <Route exact path='/' component={Landing}/>
  <Route exact path='/signup' component={Signup}/>
  <Route exact path='/login' component={Signin}/>
  <ProtectedRoute exact path='/dashboard' component={dashboard}/>
  <Route exact path='/custdashboard' component={CustDashboard}/>

  <Route path="/baag" component={Bag}/>
  <Route path="/bags" component={BagList}/>
  <Route exact path='/addUser' component={Add}/>
  <CustRoute  path="/custbag" component={BagListC}/>
 <Route path='/bagdetail/:id' component={Showbag}/>
 <Route path='/editbag/:id' component={Editbag}/>
 <Route path="/recomnd/:id" component={RecommandedBag}/>
<Route path="/home" component={Home}/>
<Route path="/bags/search/:adresse" component={Search}/>
{/*<Route path="/mydemande" component={OneDemande}/>*/}
<Route path="/mydemande" component={OneDemande}/>

</Switch>
{/*<StickyFooter/>
*/}
    </div>
  );
}

export default App;
