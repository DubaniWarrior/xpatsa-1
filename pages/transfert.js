import React,{useState, useEffect} from "react";
import TransferForm from "../components/transferFrom";
// import TransactionProvider from '../ContextAPI/TransactionContext'
 import {TestProvider} from '../ContextAPI/TestContext';

const TransfertPage = (props) => {

  
  const user = { name: 'Tania', loggedIn: true }

  const [data,setData]=useState({videos:[]});
  const [ApiData,setApiData]=useState("");

  let reponse="";

  // useEffect(()=>{
  //   const api=axios.create({
  //     baseURL:`https://data.fixer.io/api/convert?access_key=75743a764a2f10cc4d8ab0f08be20066&from=EUR&to=USD&amount=5`
  //   });
  //   api.get('/').then(res=>{
  //     // setApiData(res.data.rates.EUR);
  //     // console.log(res);
      
  //   });

  //   // console.log(ApiData);
    
  // });
  //console.log(getApi("EUR","USD",10));

  const [paysOrigine,setPaysOrigine]=useState("");
  const [PaysDestinatinataire,setPaysDestinataire]=useState("");
  const [BillingInformation,setBillingInformation]=useState("");
  const [rate,setRate]=useState("");

  const transaction = { 
    TrPaysOrigine: paysOrigine, 
    TrUpdatePaysOrigine:setPaysOrigine,
    TrPaysDestinataire: PaysDestinatinataire,
    TrUpdatePaysDestinataire:setPaysDestinataire,
    TrBillingInformation:BillingInformation,
    TrUpdateBillingInformation:setBillingInformation,
    TrRate:rate,
    TrUpdateRate:setRate,
  }


  return (
      <TestProvider value={transaction}>
        <TransferForm />
      </TestProvider>
  );
};

export default TransfertPage; 
