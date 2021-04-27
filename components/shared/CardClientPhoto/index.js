import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import CardClientPhotoStc from './CardClientPhoto.stc';
import {BsEye } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios';
import useForm from '../../../lib/useForm';

const SINGLE_CLIENT=gql`
   query SINGLE_CLIENT($id:ID!)
    { 
        client(id:$id)
        { 
            id
            firstname
            name
            telephone
            pays
            Ville
            image
        }
    }
`;

const SINGLE_MEDIA=gql`
   query SINGLE_MEDIA($id:ID!)
    { 
        files(where:{id:$id})
        { 
            id
            name
            hash
            url
        }
    }
`;


const UPDATE_CLIENT=gql`

    mutation UPDATE_CLIENT(
        $id:ID!
        $image:Int!
    ){ 

    updateClient(input:{
    where:{id:$id},
    data:{
            image:$image,
        }
    }
    )
    { 
        client
        { 
            id
            image
        }
    }
}
`;

export default function CardClientPhoto(props) {

    // on cherche l'image du client 
        const exe=useQuery(SINGLE_CLIENT,{
            variables:{
                id:props.id_client
            }
        });

        const client=exe?.data?.client
    // --------------------------------------------------

    // initialisation de l'inputs
        const {inputs,handleChange,clearForm,resetForm}=useForm({
            id:props.id_client,
            image:client?.image,
        });
    //   --------------------------------------

    const [update,{data,error,loading}]=useMutation(UPDATE_CLIENT,{
        variables:inputs,
        refetchQueries:[{query:SINGLE_CLIENT,variables:{id:props.id_client}}]
    });


    //   on initialise l'id de media on le stock dans un state
        const [media,setMedia]=useState(0);    // ----------------------------------------------------

    // le fichier uploader se stock ici
        const [file,setFile]=useState("");
    // -----------------------------------------------

    // console.log(inputs.image);

    const handleChange1=(e)=>{
       
        setFile(e.target.files[0]);
    }

  
   
    const handleSubmit1=async (e)=>{
        e.preventDefault();

        const data = new FormData();

        data.append('files',file);
        const upload_res=await axios({
            method:'POST',
            url:'https://www.xpatsa.online/upload',
            data,
        })
        
        if(upload_res.data){
            setMedia(upload_res.data[0]?.id);
            // console.log(media)
            inputs.image=upload_res.data[0]?.id;
            

        }
        // console.log(inputs);
        await update();
        
        // mettre à jours la photo de l'utilisateur


    }


    const exe1=useQuery(SINGLE_MEDIA,{
        variables:{
            id:inputs.image
        }
    });

    console.log(exe1?.data)
    let lien=exe1?.data?.files[0]?.url?<img src={"https://www.xpatsa.online/"+exe1?.data?.files[0]?.url}  />: <Image src="/img/avatar.png" width="220" height="220" />
  return (
      <CardClientPhotoStc>
            <Row>
                <Col lg={3}>
                    <p className="label">Photo du client </p>
                    <div className="cadrePhoto">
                       {lien}
                    </div>
                    <form onSubmit={handleSubmit1} className="formChangeFile">
                        <Row className="">
                            <Col sm={8}>
                                <input type="file" onChange={handleChange1} className="form-control"/>
                            </Col>
                            <Col sm={4}>
                                <button type="submit" className="btn form-control">Ok</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
            
      </CardClientPhotoStc>
  )
}