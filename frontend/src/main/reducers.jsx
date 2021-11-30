import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../components/pages/dashboard/dashboardReducer'
import TabReducer from '../components/pages/billingCycles/tab/tabReducer'
import BillingCycleReducer from '../components/pages/billingCycles/billingCycleReducer'
import AuthReducer from '../components/pages/auth/authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer