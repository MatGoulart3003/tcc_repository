import React, { useState } from "react";
import { Button, Container, DescriptionText } from "../../style";
import apiCar from "../../../../../Services/ApiCar";

export default function RecommendedManut (){

    const [recommendedMaints, setRecommendedMaints] = useState ([]);    
    const [maintenancesForRecommend, setMaintenancesForRecommend] = useState ([]);

    const getRecommendedManuts = async () => {
        const result = await apiCar.get('/recommendedMaint')
        setRecommendedMaints(result.data)
    }

    const getRecommendedManutsByCar = async () => {
        const result = await apiCar.get('/recommendedMaint/2')
        setMaintenancesForRecommend(result.data)
    }

    const callMethods = ()=>{
        getRecommendedManuts();
        getRecommendedManutsByCar()

    }

    const showConsoleLog = () =>{
        console.log(recommendedMaints)
        console.log(maintenancesForRecommend)
    }

    return(
        <Container>
            <DescriptionText>tela de recomendação de manutenção</DescriptionText>
            <Button onPress={()=> callMethods()}></Button>
            <Button onPress={()=> showConsoleLog()}></Button>
        </Container>
    )

}