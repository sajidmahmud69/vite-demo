import Trades from "./components/Trades/Trades"
import QuickTicket from "./components/QuickTicket/QuickTicket"
import SalesTicket from "./components/SalesTicket/SalesTicket"
import DealsAndTranches from "./components/DealsAndTranches/DealsAndTranches"
import Settlement from "./components/Settlement/Settlement"
import Positions from './components/Positions/Positions'
import Closing from "./components/Closing/Closing"

import Button from '@mui/material/Button'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
const App = () => {
  return (
    <Router>
    <div>
      <Button component={Link} to="/trades" variant="contained" color="primary">
        Trades
      </Button>
      <Button component={Link} to="/quickticket" variant="contained" color="primary">
        Quick Ticket
      </Button>
      <Button component={Link} to="/salesticket" variant="contained" color="primary">
        Sales Ticket
      </Button>
      <Button component={Link} to="/dealsandtranches" variant="contained" color="primary">
        Deals And Tranches
      </Button>
      <Button component={Link} to="/positions" variant="contained" color="primary">
        Positions
      </Button>
      <Button component={Link} to="/settlement" variant="contained" color="primary">
        Settlement
      </Button>
      <Button component={Link} to="/closing" variant="contained" color="primary">
        Closing
      </Button>

      <Routes>
        <Route path="/trades" element = {<Trades />} />
        <Route path="/quickticket" element = {<QuickTicket />} />
        <Route path="/salesticket" element = {<SalesTicket />} />
        <Route path="/dealsandtranches" element = {<DealsAndTranches />} />
        <Route path="/positions" element = {<Positions />} />
        <Route path="/settlement" element = {<Settlement />} />
        <Route path="/closing" element = {<Closing />} />
      </Routes>

    </div>
  </Router>
  )
}

export default App