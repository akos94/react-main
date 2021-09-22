import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/layout';
import LoginLayout from './components/loginlayout';
import TabletLoginLayout from './components/tabletloginlayout';
import { isTablet } from 'react-device-detect';

function App() {
  if (isTablet) {
    
    return (
      <Router>
        <Switch>
          
          <Route exact path="/dashboard" component={Layout}/>
  
          
  
          <Route path="/login" component={TabletLoginLayout}/>
          
        </Switch>
        
      </Router>
      );

  } else {
      return (
        <Router>
          <Switch>
            
            <Route exact path="/dashboard" component={Layout}/>
    
            
    
            <Route path="/login" component={LoginLayout}/>
            
          </Switch>
          
        </Router>
        );
      }
  }
  

export default App;
