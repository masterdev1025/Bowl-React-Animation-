import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// bowl select components
import Bowlselect1 from './components/bowlselect/bowlSelect1'
import Bowlselect2 from './components/bowlselect/bowlSelect2'
import Bowlselect3 from './components/bowlselect/bowlSelect3'
import Bowlselect4 from './components/bowlselect/bowlSelect4'
import Bowlselect5 from './components/bowlselect/bowlSelect5'
import Bowlselect6 from './components/bowlselect/bowlSelect6'
import '../src/fonts/font-awesome/scss/font-awesome.css';
//bowl size select
import RegBowl from './components/bowlselect/bowlReg'
import MiniBowl from './components/bowlselect/bowlMini'
//moduls
import {createStore} from 'redux'
import {Provider} from 'react-redux'

//another components
import AboutUsComponent from './components/aboutUs'
import ContactUsComponent from './components/contactUs'
import SelectSides from './components/bowlselect/selectSides'
import ManageAdr from './components/manageAdr'
import AddAddr from './components/addAdr'
import Cart from './components/cart' 
import CheffC from './components/cheffCurated'
import Myorders from './components/myOrder'
import YrCollection from './components/Urcollection'
import Payment from './components/payment'
import ApplyC from './components/appC'
import Pmethods from './components/paymentMethod'
import LoginComp from './components/login'
import Congr from './components/bowlselect/congratulations'
import Thanks from './components/bowlselect/thanks'
import TrackOrd from './components/bowlselect/trackorder'
import Editpasta from './components/editPasta'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import aboutUs from './components/aboutUs';
import Urcollection from './components/Urcollection';

const initialState = {
    bow:'',
    pasta:'',
    garnish:'',
    meet:'',
    sauce:'',
    veggies:'',
    price:0,
    pastaName:'',
  checkLogout:false,

  contactUsInfo:[
    {email:'about_us@pastaproject.in',link:"#"},
  ],
  saucesTypes:[
    {name:'Alfredo', price:100,src:'./images/sauce3.png'},
    {name:'Agilo olio', price:120,src:'./images/sauce2.png'},
    {name:'Arrabiata', price:130,src:'./images/sauce1.png'},
    {name:'Pesto', price:140,src:'./images/sauce4.png'},
    {name:'Mushroom', price:150,src:'./images/sauce5.png'},
  ],
  pastaTypes:[
    {name:'Penne',src:'./images/pasta1.png' },
    {name:'Spaghetti',src:'./images/pasta2.png'},
    {name:'Elbow Macaroni',src:'./images/pasta3.png',kk:'./images/krown.png'},
    {name:'Quinoa Penne',src:'./images/pasta4.png'},
    {name:'Whole wheat Spaghetti',src:'./images/pasta5.png'},
    {name:'Whole wheat Spaghetti222',src:'./images/pasta5.png'},
    {name:'Whole',src:'./images/pasta1.png'},
  ],
  veggiesTypes:[
    {name:'Broccoli',src:'./images/vegg1.png' },
    {name:'Bell Pepper',src:'./images/vegg2.png'},
    {name:'Mushroom',src:'./images/vegg3.png'},
    {name:'Zucchini',src:'./images/vegg4.png'},
    {name:'Cherry Tomatoes',src:'./images/vegg5.png'},

  ],
  garnishTypes:[
    {name:'Black olives',src:'./images/garn1.png' },
    {name:'Sundried tomato',src:'./images/garn2.png'},
    {name:'Basil',src:'./images/garn3.png',kk:'./images/krown.png'},
    {name:'Parsley',src:'./images/garn4.png',kk:'./images/kk2.png'},
    {name:'Parmesan cheese',src:'./images/garn5.png'},
  ],
  meatTypes:[
    {name:'Grilled chicken',src:'./images/meat1.png' },
    {name:'Shrimp',src:'./images/meat2.png'},
    {name:'Bacon',src:'./images/meat3.png',kk:'./images/krown.png'},
    {name:'Chicken sausage',src:'./images/meat4.png'},
    {name:'Meatballs',src:'./images/meat5.png'},
  ],
  sidesTypes:[
    {name:'Garlic bread',src:'./images/side1.png'},
    {name:'Farm fresh salad',src:'./images/side2.png'},
    {name:'Cheese potatoes'},
    {name:'French fries',src:'./images/side3.png'},
  ],
  addresessHome:[
    {name:'Mayan Sachan' ,phone:'9415 730 069',email:'mayansach@gmail.com',street:'1912, Block A, Sector 45, Gurugram, Haryana, India 122003'},
    {name:'Mayan Sachan' ,phone:'9415 730 069',email:'mayansach@gmail.com',street:'1912, Block A, Sector 45, Gurugram, Haryana, India 122003'},
    {name:'Mayan Sachan' ,phone:'9415 730 069',email:'mayansach@gmail.com',street:'1912, Block A, Sector 45, Gurugram, Haryana, India 122003'},
    {name:'Mayan Sachan' ,phone:'9415 730 069',email:'mayansach@gmail.com',street:'1912, Block A, Sector 45, Gurugram, Haryana, India 122003'},
  ],
  cartItems:[
    {name:'Alfredo Spagetti',ingr:'Broccoli, Bell pepper, Mushroom  Chicken sausage, Black olives,   Parsley, Farm fresh salad.' , plate:"regular",price:250}
  ],
  cheffCurated:[
    {name:'Alfredo penne olives',ingr:'White sauce, penne, olives, broccoli, black pepper and extra cheese',price:250,src:'./images/chf1.png'},
    {name:'Alfredo penne olives',ingr:'White sauce, penne, olives, broccoli, black pepper and extra cheese',price:250,src:'./images/chf1.png'},
  ],
  myOrders:[
    {to:'Mayan Sachan',ordNum:'ABCDEF123456',tot:100,status:'delivered',date:'12/06/19',status:'delivered'},
    {to:'Mayan Sachan',ordNum:'ABCDEF123456',tot:100,status:'delivered',date:'12/06/19',status:'delivered'}
  ],
  yourCollection:[
    {name:'Alfredo spaghetti' ,src:'./images/cc.png',price:250},
    {name:'Alfredo spaghetti' ,src:'./images/cc.png',price:250},
    {name:'Alfredo spaghetti' ,src:'./images/cc.png',price:250},
    {name:'Alfredo spaghetti' ,src:'./images/cc.png',price:250},
  ] ,
  itemTotal:{
    iTot:200.50,pS:20.00,tax:20.00,disc:50.00,grandTot:220.50,
    d:[
      {name:'Alfredo Spagetti',cnt:2,tot:400},
      {name:'Alfredo Spagetti',cnt:2,tot:400},
      {name:'Alfredo Spagetti',cnt:2,tot:400},
    ]
  },
  availableCoupons:[
   {name:"pasta50",headInfo:'Get 50% discount on your first order using the code',mainInfo:'Use code pasta50 and you can get a 50% discount upto Rs. 200 and an additional value offer. ',src:''},
   {name:"PAYTM50",headInfo:'Get 50% discount on your first order using the code',mainInfo:'Use code pasta50 and you can get a 50% discount upto Rs. 200 and an additional value offer. ',src:'./images/pyt.png'}
  ],
  paymentMethod:[
    {name:'Paytm',src:'./images/pyt.png'},
    {name:'Google Pay',src:'./images/google.png'},
    {name:'Amazon Pay',src:'./images/amazon.png'},
    {name:'Cash on Delivery',src:''},
    {name:'Cash on Delivery',src:''}
  ],
  desserts:[
    {name:'Dark chocolate brownie',price:250,src:'./images/browni.png'},
    {name:'Dark chocolate brownie',price:250,src:'./images/browni.png'},
    {name:'Dark chocolate brownie',price:250,src:'./images/browni.png'},
    {name:'Dark chocolate brownie',price:250,src:'./images/browni.png'},
 ],
}
function reducer(state=initialState,action){
  return state
}
const store = createStore(reducer)
store.subscribe(()=>{
    console.log(store.getState());
})

const routing = (
  <Provider store = {store}>
      <Router>
        <div className="homePage-wrapper"> 
          <Route path="/cheff" component={CheffC} />
          <Route path="/regularbowl" component={RegBowl} />
          <Route path="/minibowl" component={MiniBowl} />
          <Route path="/contactus" component={ContactUsComponent} />
          <Route path="/yourcollection" component={Urcollection} />
          <Route path="/manageaddress" component={ManageAdr} />
          <Route path="/addaddress" component={AddAddr} />
          <Route path="/cart" component={Cart} />
          <Route path="/apply" component={ApplyC} />
          <Route path="/payment" component={Payment} />
          <Route path="/aboutus" component={AboutUsComponent} />
          <Route path="/bowlselect1" component={Bowlselect1} />
          <Route path="/bowlselect2" component={Bowlselect2} />
          <Route path="/bowlselect3" component={Bowlselect3} />
          <Route path="/bowlselect4" component={Bowlselect4} />
          <Route path="/bowlselect5" component={Bowlselect5} />
          <Route path="/bowlselect6" component={Bowlselect6} />
          <Route path="/myorders" component={Myorders} />
          <Route path="/selectsides" component={SelectSides} />
          <Route path="/paymentmethods" component={Pmethods} />
          <Route path="/thanksfororder" component={Thanks} />
          <Route path="/login" component={LoginComp} />
          <Route path="/editpasta" component={Editpasta} />
          <Route path="/ordertracker" component={TrackOrd} />
          <Route path="/congratulations" component={Congr} />
          <Route exact path="/" component={App} />
        </div>
      </Router>
    </Provider>
  );
// payment ,paymentmethods , youcollection , login
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
